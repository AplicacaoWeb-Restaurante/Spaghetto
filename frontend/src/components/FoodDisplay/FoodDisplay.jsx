import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

// Componente para exibir uma lista de itens de comida filtrados com base na categoria selecionada e no termo de busca.
const FoodDisplay = ({ category }) => {
  // Pega a lista de comida do contexto
  const { food_list } = useContext(StoreContext);
  
  // Estado local para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState('');

  // Função para atualizar o termo de busca quando o usuário digita no campo de busca
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtra a lista de comida com base na categoria selecionada, termo de busca e status do item
  const filteredFoodList = food_list.filter((item) => {
    // Verifica se o item pertence à categoria selecionada ou se a categoria é "All"
    const matchesCategory = category === "All" || category === item.category;
    
    // Verifica se o item corresponde ao termo de busca no nome ou na descrição
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Retorna verdadeiro se o item corresponder à categoria e ao termo de busca, e se o status do item for verdadeiro
    return matchesCategory && matchesSearch && item.status === true;
  });

  return (
    <div className='food-display' id='food-display'>
      <div className='food-display-header'>
        {/* Título da seção */}
        <h2>Nosso Menu</h2>
        
        {/* Campo de busca para filtrar os itens */}
        <input 
          type='text' 
          placeholder='Buscar...' 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className='food-search-input'
        />
      </div>
      <div className='food-display-list'>
        {/* Mapeia a lista filtrada de comida para exibir os itens */}
        {filteredFoodList.map((item) => (
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
};

export default FoodDisplay;
