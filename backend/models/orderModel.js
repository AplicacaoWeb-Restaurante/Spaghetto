// Importando a biblioteca mongoose para trabalhar com MongoDB
import mongoose from "mongoose";

// Definindo um schema (esquema) para a coleção de pedidos (orders)
const orderSchema = new mongoose.Schema({
    // Campo userId, que armazena o ID do usuário, do tipo String e é obrigatório
    userId: { type: String, required: true },
    
    // Campo items, que armazena os itens do pedido, do tipo Array e é obrigatório
    items: { type: Array, required: true },
    
    // Campo amount, que armazena o valor total do pedido, do tipo Number e é obrigatório
    amount: { type: Number, required: true },
    
    // Campo address, que armazena o endereço de entrega, do tipo Object e é obrigatório
    address: { type: Object, required: true },
    
    // Campo status, que armazena o status do pedido, do tipo String e tem um valor padrão de "Preparando pedido"
    status: { type: String, default: "Preparando pedido" },
    
    // Campo date, que armazena a data do pedido, do tipo Date e tem um valor padrão da data e hora atuais
    date: { type: Date, default: Date.now() },
    
    // Campo payment, que armazena se o pagamento foi realizado, do tipo Boolean e tem um valor padrão de false
    payment: { type: Boolean, default: false }
});

// Criando um modelo para a coleção de pedidos (orders) com base no schema definido
// Se o modelo já existir, será utilizado o existente, caso contrário, um novo modelo será criado
const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

// Exportando o modelo para que possa ser utilizado em outras partes da aplicação
export default orderModel;
