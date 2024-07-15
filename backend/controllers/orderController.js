import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Configurando as variáveis
const currency = "brl";
const deliveryCharge = 5;
const frontend_URL = 'http://localhost:5173';

// Fazendo o pedido do usuário para Frontend usando stripe
const placeOrder = async (req, res) => {
    try {
        // Cria um novo pedido com os dados fornecidos no corpo da requisição
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        // Salva o novo pedido no banco de dados
        await newOrder.save();
        // Limpa os dados do carrinho do usuário
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Configura os itens do pedido para o Stripe
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: { name: item.name },
                unit_amount: item.price * 100, // preço em centavos
            },
            quantity: item.quantity,
        }));

        // Adiciona a taxa de entrega como um item separado
        line_items.push({
            price_data: {
                currency: currency,
                product_data: { name: "Taxa de entrega" },
                unit_amount: deliveryCharge * 100, // taxa de entrega em centavos
            },
            quantity: 1,
        });

        // Cria uma sessão de checkout no Stripe
        const session = await stripe.checkout.sessions.create({
            success_url: `${frontend_URL}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_URL}/verify?success=false&orderId=${newOrder._id}`,
            line_items: line_items,
            mode: 'payment',
        });

        // Responde com sucesso e a URL da sessão do Stripe
        res.json({ success: true, session_url: session.url });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
};

// Fazendo o pedido do usuário para o Frontend usando pagamento na entrega
const placeOrderCod = async (req, res) => {
    try {
        // Cria um novo pedido com os dados fornecidos no corpo da requisição
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: true, // indica que o pagamento será na entrega
        });
        // Salva o novo pedido no banco de dados
        await newOrder.save();
        // Limpa os dados do carrinho do usuário
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Pedido feito" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
};

// Função usada no admin-panel para listar todos os pedidos
const listOrders = async (req, res) => {
    try {
        // Tenta encontrar todos os pedidos no banco de dados
        const orders = await orderModel.find({});
        // Responde com um JSON contendo sucesso e os dados dos pedidos
        res.json({ success: true, data: orders });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
};

// Função usada no front-end para listar os pedidos de um mesmo usuário (pelo id)
const userOrders = async (req, res) => {
    try {
        // Tenta encontrar todos os pedidos do usuário no banco de dados
        const orders = await orderModel.find({ userId: req.body.userId });
        // Responde com um JSON contendo sucesso e os dados dos pedidos
        res.json({ success: true, data: orders });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
};

// Função usada para atualizar o status de um pedido no banco de dados com base no orderId (id do pedido)
const updateStatus = async (req, res) => {
    // Loga o corpo da requisição para depuração
    console.log(req.body);
    try {
        // Atualiza o pedido com o ID fornecido, ajustando o status conforme o corpo da requisição
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Status Atualizado" });
    } catch (error) {
        // Em caso de erro, responde com falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
};

// Função usada para verificar o status de pagamento de um pedido
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            // Atualiza o pedido para indicar que o pagamento foi efetuado
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            // Responde com sucesso e uma mensagem de confirmação de pagamento
            res.json({ success: true, message: "Pago" });
        } else {
            // Deleta o pedido se o pagamento não foi efetuado
            await orderModel.findByIdAndDelete(orderId);
            // Responde com falha e uma mensagem de não pagamento
            res.json({ success: false, message: "Não pago" });
        }
    } catch (error) {
        // Em caso de erro, responde com falha e uma mensagem de erro
        res.json({ success: false, message: "Não verificado" });
    }
};

// Função usada para remover um pedido
const removeOrder = async (req, res) => {
    try {
        // Obtém o ID do pedido a partir dos parâmetros da requisição
        const orderId = req.params.id;
        
        // Busca o pedido pelo ID
        const order = await orderModel.findById(orderId);
        
        // Verifica se o pedido existe
        if (!order) {
            // Se o pedido não for encontrado, responde com falha e uma mensagem de "Pedido não encontrado"
            return res.json({ success: false, message: "Pedido não encontrado" });
        }
        
        // Remove o pedido pelo ID
        await orderModel.findByIdAndDelete(orderId);
        
        // Responde com sucesso e uma mensagem de "Produto removido"
        res.json({ success: true, message: "Produto removido" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        
        // Responde com falha e uma mensagem de "Erro ao remover pedido"
        res.json({ success: false, message: "Erro ao remover pedido" });
    }
};


export { placeOrder, listOrders, userOrders, updateStatus, verifyOrder, placeOrderCod, removeOrder };
