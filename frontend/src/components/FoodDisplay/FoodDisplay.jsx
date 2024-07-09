import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFoodList = food_list.filter((item) => {
    const matchesCategory = category === "All" || category === item.category;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch && item.status === true;
  });

  return (
    <div className='food-display' id='food-display'>
      <div className='food-display-header'>
        <h2>Nosso Menu</h2>
        <input type='text' placeholder='Buscar...' value={searchTerm} onChange={handleSearchChange} className='food-search-input'/>
      </div>
      <div className='food-display-list'>
        {filteredFoodList.map((item) => (
          <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
