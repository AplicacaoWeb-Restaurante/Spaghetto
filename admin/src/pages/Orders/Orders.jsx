import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url, currency } from '../../assets/assets';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    minPrice: '',
    maxPrice: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data.reverse());
    } else {
      toast.error('Error');
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(`${url}/api/order/status`, {
      orderId,
      status: event.target.value
    });
    if (response.data.success) {
      await fetchAllOrders();
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

  const filteredOrders = orders.filter((order) => {
    const meetsMinPriceCriteria = filters.minPrice === '' || order.amount >= parseFloat(filters.minPrice);
    const meetsMaxPriceCriteria = filters.maxPrice === '' || order.amount <= parseFloat(filters.maxPrice);
    const meetsNameCriteria = filters.name === '' || `${order.address.firstName} ${order.address.lastName}`.toLowerCase().includes(filters.name.toLowerCase());
    const meetsStatusCriteria = filters.status === '' || order.status === filters.status;

    return meetsMinPriceCriteria && meetsMaxPriceCriteria && meetsNameCriteria && meetsStatusCriteria;
  });

  const getOrderClass = (status) => {
    switch (status) {
      case 'Preparando pedido':
        return 'order-item-preparando';
      case 'Saiu para entrega':
        return 'order-item-entrega';
      case 'Entregue':
        return 'order-item-entregue';
      default:
        return '';
    }
  };

  const removeOrder = async (orderId) => {
    const response = await axios.delete(`${url}/api/order/delete/${orderId}`);
    if (response.data.success) {
      await fetchAllOrders();
      toast.success('Pedido removido com sucesso');
    } else {
      toast.error('Erro ao remover pedido');
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add flex-col'>
      <h1>Lista de Pedidos</h1>
      <img className='icon' src={assets.filter_icon} onClick={toggleFilters} alt="" />
      {showFilters && (
        <div className='filters'>
          <input type='text' name='name' placeholder='Filtrar por nome do(a) cliente' value={filters.name} onChange={handleFilterChange} />
          <select name='status' value={filters.status} onChange={handleFilterChange} >
            <option value=''>Filtrar por status</option>
            <option value='Preparando pedido'>Preparando pedido</option>
            <option value='Saiu para entrega'>Saiu para entrega</option>
            <option value='Entregue'>Entregue</option>
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
      <div className="order-list">
        {filteredOrders.map((order, index) => (
          <div key={index} className={`order-item ${getOrderClass(order.status)}`}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Itens : {order.items.length}</p>
            <p>{currency}{order.amount.toFixed(2)}</p>
            <div className="status-action">
              <select onChange={(e) => statusHandler(e, order._id)} value={order.status} name="" id="">
                <option value="Preparando pedido">Preparando pedido</option>
                <option value="Saiu para entrega">Saiu para entrega</option>
                <option value="Entregue">Entregue</option>
              </select>
              <div className='action-icon-container'>
                <img className='action-icon' src={assets.trash_icon} onClick={() => removeOrder(order._id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
