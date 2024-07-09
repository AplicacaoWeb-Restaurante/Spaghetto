import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Lista todos os produtos
const listFood = async (req, res) => {
    try {
        // Tenta encontrar todos os produtos no banco de dados
        const foods = await foodModel.find({});
        // Responde com um JSON contendo sucesso e os dados dos produtos
        res.json({ success: true, data: foods });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro" });
    }
};

// Adiciona um novo produto
const addFood = async (req, res) => {
    try {
        // Obtém o nome do arquivo de imagem enviado
        let image_filename = `${req.file.filename}`;

        // Cria um novo modelo de produto com os dados fornecidos no corpo da requisição
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        // Salva o novo produto no banco de dados
        await food.save();
        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto adicionado" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao adicionar produto" });
    }
};

// Edita um produto existente
const editFood = async (req, res) => {
    try {
        // Obtém o ID do produto a ser editado
        const { id } = req.params;
        // Obtém os dados atualizados do corpo da requisição
        const updatedData = req.body;

        // Se um novo arquivo de imagem for enviado, inclui-o na atualização
        if (req.file) {
            updatedData.image = `${req.file.filename}`;

            // Remove o arquivo de imagem antigo
            const oldFood = await foodModel.findById(id);
            if (oldFood && oldFood.image) {
                fs.unlink(`uploads/${oldFood.image}`, (err) => {
                    if (err) console.log(err);
                });
            }
        }

        // Atualiza o produto no banco de dados
        const food = await foodModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!food) {
            return res.json({ success: false, message: "Produto não encontrado" });
        }

        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto atualizado", data: food });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao atualizar produto" });
    }
};

// Atualiza o status de um produto
const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        // Tenta encontrar o produto pelo ID
        const foodItem = await foodModel.findById(id);

        if (!foodItem) {
            // Se o produto não for encontrado, responde com falha
            return res.status(404).json({ success: false, message: 'Produto não encontrado' });
        }

        // Atualiza o status do produto
        foodItem.status = status;
        await foodItem.save();

        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: 'Status atualizado com sucesso' });
    } catch (error) {
        // Em caso de erro, responde com falha e uma mensagem de erro
        res.status(500).json({ success: false, message: 'Erro ao atualizar o status', error });
    }
};

// Atualiza o status de promoção de um produto
const updatePromotion = async (req, res) => {
    const { id } = req.params;
    const { promotion } = req.body;

    try {
        // Tenta encontrar o produto pelo ID
        const foodItem = await foodModel.findById(id);

        if (!foodItem) {
            // Se o produto não for encontrado, responde com falha
            return res.status(404).json({ success: false, message: 'Produto não encontrado' });
        }

        // Atualiza o status de promoção do produto
        foodItem.promotion = promotion;
        await foodItem.save();

        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: 'Promoção atualizada com sucesso' });
    } catch (error) {
        // Em caso de erro, responde com falha e uma mensagem de erro
        res.status(500).json({ success: false, message: 'Erro ao atualizar a promoção', error });
    }
};


// Remove um produto
const removeFood = async (req, res) => {
    try {
        // Obtém o ID do produto a ser removido
        const foodId = req.params.id;
        // Tenta encontrar o produto no banco de dados
        const food = await foodModel.findById(foodId);
        if (!food) {
            // Se o produto não for encontrado, responde com falha
            return res.json({ success: false, message: "Produto não encontrado" });
        }
        // Remove o arquivo de imagem do produto
        fs.unlink(`uploads/${food.image}`, () => {});

        // Remove o produto do banco de dados
        await foodModel.findByIdAndDelete(foodId);
        // Responde com sucesso e uma mensagem de confirmação
        res.json({ success: true, message: "Produto removido" });
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);
        // Responde com um JSON indicando falha e uma mensagem de erro
        res.json({ success: false, message: "Erro ao remover produto" });
    }
};

export { listFood, addFood, editFood, removeFood, updateStatus, updatePromotion};
