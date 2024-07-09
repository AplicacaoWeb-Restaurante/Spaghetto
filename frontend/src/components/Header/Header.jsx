import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Bem vindos ao nosso restaurante <span className='header-highlight'>italiano</span></h2>
                <p>Desperte seus sentidos e embarque em uma viagem culinária à Itália com o nosso menu cuidadosamente elaborado. Cada prato é uma obra de arte, preparada com os ingredientes mais frescos e da mais alta qualidade, combinados com a expertise dos nossos talentosos chefs.</p>
                <a href='#explore-menu'><h4>Ver Menu</h4></a>
            </div>
        </div>
    )
}

export default Header
