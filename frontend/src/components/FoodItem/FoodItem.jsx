import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, desc, status, price, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url + "/images/" + image} alt="" />
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
        <p>{name.length > 24 ? name.substring(0, 19) + '...' : name}</p>
        </div>
        <p className="food-item-desc">{truncateDescription(desc, 100)}</p>
        <p>{status}</p>
        <p className="food-item-price">
          {currency}{price.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
