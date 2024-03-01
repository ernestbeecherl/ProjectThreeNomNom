import { Link } from 'react-router-dom';
import React from 'react';
//import Nav from './components/Navbar/Nav'; 
import Logo from './nom.jpg';
import './styles.css';

const Header = () => {
  return (
    <header className=" text-white mb-4 py-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 165, 0, 1.5)' }}>
      <div className="container flex-row justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0 justify-center align-center text-center" style={{ fontSize: '3rem' }}>
          <img src={Logo} alt="Logo" style= {{height: '100px'}} />
            NomNomNav
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        </p>
      </div>
    </header>
  );
};

export default Header;
