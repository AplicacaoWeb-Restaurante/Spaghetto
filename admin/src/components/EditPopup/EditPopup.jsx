import React, { useState, useEffect } from 'react';
import './EditPopup.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditPopup = ({ setShowEditPopup, product, fetchList, url }) => {
    // Estado inicial dos dados do formulário com valores do produto recebido
    const [data, setData] = useState({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        image: product.image,
    });

    // Atualiza o estado quando o produto muda
    useEffect(() => {
        if (product) {
            setData({
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                image: product.image,
            });
        }
    }, [product]);

    // Manipulador de mudanças para campos de texto e seleção
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Manipulador de mudanças para o campo de imagem
    const onImageChange = (event) => {
        setData((prevData) => ({ ...prevData, image: event.target.files[0] }));
    };

    // Função para salvar as alterações
    const onSave = async (e) => {
        e.preventDefault();

        // Cria um FormData para envio dos dados, incluindo a imagem se houver
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('price', data.price);
        if (data.image) {
            formData.append('image', data.image);
        }

        try {
            // Envia uma solicitação PUT para editar o produto
            const response = await axios.put(`${url}/api/food/edit/${product._id}`, formData);
            if (response.data.success) {
                // Exibe uma mensagem de sucesso e atualiza a lista
                toast.success(response.data.message);
                fetchList();
                setShowEditPopup(false);
            } else {
                // Exibe uma mensagem de erro
                toast.error(response.data.message);
            }
        } catch (error) {
            // Exibe uma mensagem de erro em caso de falha
            toast.error('Erro ao editar produto.');
        }
    };

    return (
        <div className='edit-popup'>
            <form onSubmit={onSave} className="edit-popup-container">
                <div className="edit-popup-title">
                    <h2>Editar Produto</h2>
                    <img onClick={() => setShowEditPopup(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="edit-popup-inputs">
                    <div className="image-container">
                        <img src={`${url}/images/` + data.image} alt="" />
                    </div>
                    <p>Nome do produto</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Nome' required />
                    <p>Descrição do produto</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} rows={6} type="text" placeholder='Descrição' required />
                    <p>Categoria</p>
                    <select name='category' onChange={onChangeHandler} value={data.category} placeholder='Categoria' required>
                        <option value="Pratos Principais">Pratos Principais</option>
                        <option value="Entradas">Entradas</option>
                        <option value="Petiscos">Petiscos</option>
                        <option value="Sobremesas">Sobremesas</option>
                        <option value="Bebidas">Bebidas</option>
                    </select>
                    <p>Valor</p>
                    <input name='price' onChange={onChangeHandler} value={data.price} type="number" placeholder='Preço' required />
                    <p>Nova imagem</p>
                    <input name='image' onChange={onImageChange} type="file" />
                </div>

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default EditPopup;
