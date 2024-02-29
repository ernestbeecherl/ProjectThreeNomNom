import { Link } from 'react-router-dom';
import React from 'react';
import Nav from './components/Navbar/Nav'; 

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            NomNomNav
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Where the start of your foodie adventure begins.
        </p>
      </div>
    </header>
  );
};

export default Header;
