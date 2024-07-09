import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showFixedMenu, setShowFixedMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFixedMenu(true);
      } else {
        setShowFixedMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const handleNavigate = (path, anchor) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        const yOffset = -100; // Ajuste o valor conforme necessário
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
};


  return (
    <div className="nav-container">
      {showFixedMenu && (
        <div className='navbar_menu-fixo'>
          <ul>
            <a><li onClick={() => handleNavigate('/', 'home')} className={menu === "home" ? "active" : ""}>Home</li></a>
            <a><li onClick={() => handleNavigate('/', 'explore-menu')} className={menu === "menu" ? "active" : ""}>Menu</li></a>
            <a><li onClick={() => handleNavigate('/', 'promo-display')} className={menu === "promo" ? "active" : ""}>Promo do Dia</li></a>
            <a><li onClick={() => handleNavigate('/contato', 'contact')} className={menu === "contact" ? "active" : ""}>Contato</li></a>
            <li>
              {!token ? (
                <p className='perfil' onClick={() => setShowLogin(true)}><a><img src={assets.profile_icon} alt="Profile Icon" /></a></p>
              ) : (
                <div className='navbar-profile'>
                  <img src={assets.profile_icon} alt="Profile Icon" className='nav-profile-icon' />
                </div>
              )}
            </li>
            <li>
              <div onClick={() => navigate('/cart')} className='navbar-search-icon'>
                <img src={assets.bag} alt="Cart Icon" className='nav-bag-icon' />
                <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className="navbar-right">
        <p className="informacoes">
          Domingo - Quinta-feira: 11h30 - 23h | Sexta-feira e Sábado: 11h30 - 00h
        </p>
        <div onClick={() => navigate('/cart')} className='navbar-search-icon'>
          <img src={assets.bag} alt="Cart Icon" className='nav-bag-icon' />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </div>
        {!token ? (
          <p className='perfil' onClick={() => setShowLogin(true)}><img src={assets.profile_icon} alt="Profile Icon" /></p>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile Icon" className='nav-profile-icon' />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders Icon" /> <p>Pedidos</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout Icon" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='navbar'>
        <div onClick={() => handleNavigate('/', 'home')}>
          <img className='logo logo-left' src={assets.logo} alt="Logo" />
        </div>
        <ul className="navbar-menu">
          <li onClick={() => handleNavigate('/', 'home')} className={menu === "home" ? "active" : ""}>Home</li>
          <li onClick={() => handleNavigate('/', 'explore-menu')} className={menu === "menu" ? "active" : ""}>Menu</li>
          <div onClick={() => handleNavigate('/', 'home')}>
            <img className='logo' src={assets.logo} alt="Logo" />
          </div>
          <li onClick={() => handleNavigate('/', 'promo-display')} className={menu === "promo" ? "active" : ""}>Promo do Dia</li>
          <li onClick={() => handleNavigate('/contato', 'contact')} className={menu === "contact" ? "active" : ""}>Contato</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
