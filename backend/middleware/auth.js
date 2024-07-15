import jwt from 'jsonwebtoken';

// Middleware de autenticação
const authMiddleware = async (req, res, next) => {
    // Extrai o token do cabeçalho da requisição
    const { token } = req.headers;
    
    // Verifica se o token está presente
    if (!token) {
        // Se o token não estiver presente, responde com falha e uma mensagem de "Login não autorizado"
        return res.json({ success: false, message: 'Login não autorizado' });
    }
    
    try {
        // Tenta verificar e decodificar o token usando a chave secreta JWT
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Adiciona o ID do usuário decodificado ao corpo da requisição
        req.body.userId = token_decode.id;
        
        // Chama a próxima função/middleware na cadeia
        next();
    } catch (error) {
        // Em caso de erro na verificação do token, responde com falha e a mensagem do erro
        return res.json({ success: false, message: error.message });
    }
};

export default authMiddleware;
