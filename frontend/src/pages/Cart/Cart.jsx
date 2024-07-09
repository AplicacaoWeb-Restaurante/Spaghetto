import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
  const navigate = useNavigate();
  const [pagamentoOpcao, setPagamentoOpcao] = useState(''); // Estado para controlar a opção de pagamento selecionada


  const [menu, setMenu] = useState(0); // Estado para controlar a posição do menu

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página sempre que o menu muda
  }, [menu]);

  const handlepagamentoOpcaoClick = (opcao) => {
    // Verifica se a opção de pagamento já está selecionada
    if (pagamentoOpcao === opcao) {
      setPagamentoOpcao(''); // Remove a seleção se já estiver selecionada
    } else {
      setPagamentoOpcao(opcao); // Define a opção de pagamento selecionada
      // navigate(`/${opcao}`); // Redireciona para a página correspondente à opção de pagamento clicada
    }
  };

  const handleFinalizarPedido = () => {
    // Redireciona para a página correspondente à opção de pagamento selecionada
    switch (pagamentoOpcao) {
      case 'entrega':
        navigate('/entrega');
        break;
      case 'retirada':
        navigate('/retirada');
        break;
      case 'restaurante':
        navigate('/restaurante');
        break;
      default:
        // Redireciona para uma página padrão caso a opção não seja reconhecida
        navigate('/');
        break;
    }
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Itens</p> <p>Título</p> <p>Preço</p> <p>Quantidade</p> <p>Total</p> <p>Remover</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={url + "/images/" + item.image} alt="" />
                <p>{item.name}</p>
                <p>{currency}{item.price.toFixed(2).replace('.', ',')}</p>
                <div>{cartItems[item._id]}</div>
                <p>{currency}{(item.price * cartItems[item._id]).toFixed(2).replace('.', ',')}</p>
                <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total do Carrinho</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Taxa de entrega</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b></div>
          </div>
          <button onClick={() => navigate('/order')}>Confirmar Pagamento</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Possui um cupom? Adicione aqui:</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='cupom de desconto' />
              <button>Adicionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
