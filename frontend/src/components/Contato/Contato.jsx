import React from 'react';
import './Contato.css';
import { useEffect } from 'react';

const Contato = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Rola para o topo da página sempre que o menu muda
    });
    return (
        <div className="contato">
            <h2>Contato</h2>
            <p>Se você tem alguma dúvida, sugestão ou quer saber mais sobre nós, entre em contato.</p>
            <form className="contato-info">
                <div className="contato-form">
                    <label htmlFor="name" >Nome:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="contato-form">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="contato-form">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contato;
