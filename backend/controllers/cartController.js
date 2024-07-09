import userModel from "../models/userModel.js";

// Adiciona um item ao carrinho do usuário
const addToCart = async (req, res) => {
   try {
      // Encontra o usuário pelo ID fornecido no corpo da requisição
      let userData = await userModel.findOne({ _id: req.body.userId });
      let cartData = await userData.cartData;

      // Verifica se o item já está no carrinho; se não, adiciona-o com quantidade 1
      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      } else {
         // Se o item já está no carrinho, incrementa a quantidade
         cartData[req.body.itemId] += 1;
      }

      // Atualiza o carrinho do usuário no banco de dados
      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      // Responde com sucesso e uma mensagem de confirmação
      res.json({ success: true, message: "Adicionado ao carrinho" });
   } catch (error) {
      // Em caso de erro, loga o erro no console
      console.log(error);
      // Responde com um JSON indicando falha e uma mensagem de erro
      res.json({ success: false, message: "Erro" });
   }
}

// Remove um item do carrinho do usuário
const removeFromCart = async (req, res) => {
   try {
      // Encontra o usuário pelo ID fornecido no corpo da requisição
      let userData = await userModel.findById(req.body.userId);
      let cartData = await userData.cartData;

      // Verifica se a quantidade do item no carrinho é maior que zero; se sim, decrementa a quantidade
      if (cartData[req.body.itemId] > 0) {
         cartData[req.body.itemId] -= 1;
      }

      // Atualiza o carrinho do usuário no banco de dados
      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      // Responde com sucesso e uma mensagem de confirmação
      res.json({ success: true, message: "Removido do carrinho" });
   } catch (error) {
      // Em caso de erro, loga o erro no console
      console.log(error);
      // Responde com um JSON indicando falha e uma mensagem de erro
      res.json({ success: false, message: "Erro" });
   }
}

// Obtém o carrinho do usuário
const getCart = async (req, res) => {
   try {
      // Encontra o usuário pelo ID fornecido no corpo da requisição
      let userData = await userModel.findById(req.body.userId);
      let cartData = await userData.cartData;

      // Responde com sucesso e os dados do carrinho do usuário
      res.json({ success: true, cartData: cartData });
   } catch (error) {
      // Em caso de erro, loga o erro no console
      console.log(error);
      // Responde com um JSON indicando falha e uma mensagem de erro
      res.json({ success: false, message: "Erro" });
   }
}

export { addToCart, removeFromCart, getCart };
