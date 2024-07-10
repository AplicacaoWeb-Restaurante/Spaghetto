import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

// Componente que exibe as informações detalhadas de um item de comida, como imagem, nome, descrição truncada, status e preço.
const FoodItem = ({ image, name, desc, status, price, id }) => {
  // Estado local para contar a quantidade de itens
  const [itemCount, setItemCount] = useState(0);
  
  // Pega as variáveis e funções do contexto
  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

  // Função para truncar a descrição se ela for maior que o comprimento máximo especificado
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        {/* Exibe a imagem do item de comida */}
        <img className='food-item-image' src={url + "/images/" + image} alt="" />
        
        {/* Verifica se o item está no carrinho, se não estiver, exibe o ícone de adicionar, se estiver, exibe o contador */}
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className="food-item-counter">
              <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
            </div>
        }
      </div>
      
      <div className="food-item-info">
        <div className="food-item-name-rating">
          {/* Exibe o nome do item de comida, truncando se for muito longo */}
          <p>{name.length > 24 ? name.substring(0, 19) + '...' : name}</p>
        </div>
        
        {/* Exibe a descrição truncada do item de comida */}
        <p className="food-item-desc">{truncateDescription(desc, 100)}</p>
        
        {/* Exibe o status do item de comida */}
        <p>{status}</p>
        
        {/* Exibe o preço do item de comida */}
        <p className="food-item-price">
          {currency}{price.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
