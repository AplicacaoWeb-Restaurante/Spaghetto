import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Spaghetto é uma experiência culinária inovadora idealizada por seis estudantes de programação fullstack apaixonados por gastronomia. Combinando seu conhecimento em tecnologia e amor pela culinária italiana autêntica, eles criaram um restaurante que redefine a forma como os clientes pedem e saboreiam seus pratos favoritos.</p>
          <a href="#explore-menu"><button className='peca-agora'>PEÇA AGORA</button></a>
        </div>
        {/* <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div> */}
        <div className="footer-content-right">
          <h2>CONTATO</h2>
          <ul>
            <li>4002-8922</li>
            <li>contact@spaghetto.com</li>
          </ul>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>

          </div>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">Copyright 2024 © Spaghetto.com - Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer
