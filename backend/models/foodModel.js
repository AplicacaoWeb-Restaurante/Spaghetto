import mongoose from "mongoose";

// Define o esquema para o modelo de produto
const foodSchema = new mongoose.Schema({
    // Nome do produto (obrigatório)
    name: { type: String, required: true },

    // Descrição do produto (obrigatório)
    description: { type: String, required: true },

    // Promoção do produto (se estará visível ou não na parte de promoções, com desconto. Padrão é falso)
    promotion: { type: Boolean, required: true, default: false },

    // Status do produto (se estará visível ou não no site, padrão é falso)
    status: { type: Boolean, required: true, default: false },

    // Preço do produto (obrigatório)
    price: { type: Number, required: true },

    // Imagem do produto (obrigatório)
    image: { type: String, required: true },

    // Categoria do produto (obrigatório)
    category: { type: String, required: true }
})

// Cria o modelo "food" baseado no esquema definido ou utiliza o já existente
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

// Exporta o modelo "food" para ser utilizado em outras partes do aplicativo
export default foodModel;
