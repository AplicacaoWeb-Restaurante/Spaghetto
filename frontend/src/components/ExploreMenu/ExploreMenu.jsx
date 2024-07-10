import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

// Componente para listar categorias do menu
const ExploreMenu = ({ category, setCategory }) => {
  // Pega a lista de menus do contexto
  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      {/* Título da seção */}
      <h1>Explore nosso menu</h1>
      
      {/* Descrição da seção */}
      <p className='explore-menu-text'>
        Escolha entre um menu diversificado com uma deliciosa variedade de pratos. 
        Nossa missão é satisfazer seus desejos e elevar sua experiência gastronômica, 
        uma refeição deliciosa de cada vez.
      </p>
      
      {/* Lista de categorias do menu */}
      <div className="explore-menu-list">
        {/* Mapeia cada item do menu_list para criar um item clicável */}
        {menu_list.map((item, index) => (
          <div 
            // Define a ação ao clicar no item: alterna entre a categoria atual e "All"
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
          >
            {/* Imagem da categoria, adiciona classe 'active' se for a categoria selecionada */}
            <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
            
            {/* Nome da categoria */}
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      
      {/* Linha horizontal para separar seções */}
      <hr />
    </div>
  );
};

export default ExploreMenu;
