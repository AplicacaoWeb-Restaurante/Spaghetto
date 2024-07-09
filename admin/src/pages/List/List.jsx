import React, { useEffect, useState } from 'react';
import './List.css';
import { url, currency } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import EditPopup from '../../components/EditPopup/EditPopup';

const List = () => {
  const [list, setList] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    minPrice: '',
    maxPrice: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error('Error');
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.delete(`${url}/api/food/remove/${foodId}`);
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error('Erro ao remover produto.');
    }
  };

  const handleEdit = (item) => {
    setEditProduct(item);
    setShowEditPopup(true);
  };

  const toggleStatus = async (item) => {
    const updatedStatus = !item.status;
    const response = await axios.put(`${url}/api/food/updateStatus/${item._id}`, { status: updatedStatus });
    if (response.data.success) {
      toast.success('Status atualizado com sucesso');
      fetchList();
    } else {
      toast.error('Erro ao atualizar o status');
    }
  };

  const togglePromotion = async (item) => {
    const updatedPromotion = !item.promotion;
    const response = await axios.put(`${url}/api/food/updatePromotion/${item._id}`, { promotion: updatedPromotion });
    if (response.data.success) {
      toast.success('Promoção atualizada com sucesso');
      fetchList();
    } else {
      toast.error('Erro ao atualizar a promoção');
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredList = list.filter((item) => {
    const meetsNameCriteria = filters.name === '' || item.name.toLowerCase().includes(filters.name.toLowerCase());
    const meetsCategoryCriteria = filters.category === '' || item.category.toLowerCase().includes(filters.category.toLowerCase());
    const meetsMinPriceCriteria = filters.minPrice === '' || item.price >= parseFloat(filters.minPrice);
    const meetsMaxPriceCriteria = filters.maxPrice === '' || item.price <= parseFloat(filters.maxPrice);

    return meetsNameCriteria && meetsCategoryCriteria && meetsMinPriceCriteria && meetsMaxPriceCriteria;
  });

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <h1>Todos os produtos</h1>
      <img className='icon' src={assets.filter_icon} onClick={toggleFilters} alt="" />
      {showFilters && (
        <div className='filters'>
          <input
            type='text'
            name='name'
            placeholder='Filtrar por nome do produto'
            value={filters.name}
            onChange={handleFilterChange}
          />
          <select name='category' value={filters.category} onChange={handleFilterChange} >
            <option value=''>Filtrar por categoria</option>
            <option value="Pratos Principais">Pratos Principais</option>
            <option value="Entradas">Entradas</option>
            <option value="Petiscos">Petiscos</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Bebidas">Bebidas</option>
          </select>
          <input
            type='number'
            name='maxPrice'
            placeholder='Digite o valor máximo'
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <input
            type='number'
            name='minPrice'
            placeholder='Digite o valor mínimo'
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
        </div>
      )}
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Imagem</b>
          <b>Nome</b>
          <b>Em promoção?</b>
          <b>Visível no site?</b>
          <b>Categoria</b>
          <b>Preço</b>
          <b>Ação</b>
        </div>
        {filteredList.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img className='product-image' src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <div className='promotion-toggle'>
                <label className='toggle-switch'>
                  <input type='checkbox' checked={item.promotion} onChange={() => togglePromotion(item)} />
                  <span className='slider'></span>
                </label>
              </div>
              <div className='status-toggle'>
                <label className='toggle-switch'>
                  <input type='checkbox' checked={item.status} onChange={() => toggleStatus(item)} />
                  <span className='slider'></span>
                </label>
              </div>
              <p>{item.category}</p>
              <p>{currency}{item.price.toFixed(2)}</p>
              <div className='action-icon'>
                <img src={assets.edit_icon} onClick={() => handleEdit(item)} />
                <img src={assets.trash_icon} onClick={() => removeFood(item._id)} />
              </div>
            </div>
          );
        })}
      </div>
      {showEditPopup && (
        <EditPopup
          setShowEditPopup={setShowEditPopup}
          product={editProduct}
          fetchList={fetchList}
          url={url}
        />
      )}
    </div>
  );
};

export default List;
