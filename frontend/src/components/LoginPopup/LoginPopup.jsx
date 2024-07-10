import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
    // Contexto global para acessar variáveis ​​e funções compartilhadas
    const { setToken, url, loadCartData } = useContext(StoreContext);

    // Estado local para controlar se o formulário está em "Login" ou "Sign Up"
    const [currState, setCurrState] = useState("Sign Up");

    // Estado local para armazenar os dados do formulário (nome, email, senha)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // Função para atualizar os dados do formulário com base no evento de mudança
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    // Função para lidar com o envio do formulário de login ou registro
    const onLogin = async (e) => {
        e.preventDefault();

        // Constrói a URL com base no estado atual (login ou registro)
        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        } else {
            new_url += "/api/user/register";
        }

        // Faz uma requisição POST para a API com os dados do formulário
        try {
            const response = await axios.post(new_url, data);
            if (response.data.success) {
                // Se a resposta da API for bem-sucedida, atualiza o token no contexto global
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token); // Armazena o token no localStorage
                loadCartData({ token: response.data.token }); // Carrega dados do carrinho usando o novo token
                setShowLogin(false); // Fecha o popup de login após o login bem-sucedido
            } else {
                // Se a resposta da API não for bem-sucedida, exibe uma mensagem de erro
                toast.error(response.data.message);
            }
        } catch (error) {
            // Trata erros de requisição
            console.error('Erro ao realizar login/registro:', error);
            toast.error('Erro ao realizar login/registro. Por favor, tente novamente.');
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    {/* Título dinâmico dependendo do estado atual */}
                    <h2>{currState === "Login" ? "Entre" : "Cadastre-se"}</h2>
                    {/* Ícone para fechar o popup de login */}
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {/* Campo de entrada para nome, visível apenas durante o registro */}
                    {currState === "Sign Up" ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Seu nome' required /> : <></>}
                    {/* Campo de entrada para email */}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Seu email' required />
                    {/* Campo de entrada para senha */}
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Senha' required />
                </div>
                {/* Botão dinâmico dependendo do estado atual */}
                <button>{currState === "Login" ? "Login" : "Criar conta"}</button>
                <div className="login-popup-condition">
                    {/* Checkbox para concordar com os termos de uso */}
                    <input type="checkbox" name="" id="" required />
                    <p>Ao continuar, eu concordo com os termos de uso e a política de privacidade.</p>
                </div>
                {/* Alternância entre login e registro */}
                {currState === "Login"
                    ? <p>Criar uma nova conta? <span onClick={() => setCurrState('Sign Up')}>Clique aqui</span></p>
                    : <p>Já possui uma conta? <span onClick={() => setCurrState('Login')}>Entre aqui</span></p>
                }
            </form>
        </div>
    );
}

export default LoginPopup;
