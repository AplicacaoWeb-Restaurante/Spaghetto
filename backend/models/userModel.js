import mongoose from "mongoose";

// Definindo o schema para a coleção de usuários
const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nome do usuário
    email: { type: String, required: true, unique: true }, // Email único do usuário
    password: { type: String, required: true }, // Senha do usuário
    cartData: { type: Object, default: {} } // Dados do carrinho de compras
}, { minimize: false }); // Manter campos vazios no objeto

// Criando o modelo para a coleção de usuários
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel; // Exportando o modelo
