import React, { useContext } from 'react';
import './PromoDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const PromoDisplay = () => {
    const { food_list } = useContext(StoreContext);

    // Filtra a lista de alimentos para incluir apenas aqueles com promoção ativa
    const promoList = food_list.filter(item => item.promotion === true);

    return (
        <div className='promo-display' id='promo-display'>
            <div className='promo-display-header'>
                <h2>Promoções do dia</h2>
            </div>
            <div className='promo-display-list'>
                {promoList.map((item) => (
                    <FoodItem 
                        key={item._id} 
                        image={item.image} 
                        name={item.name} 
                        desc={item.description} 
                        price={item.price} 
                        id={item._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default PromoDisplay;
