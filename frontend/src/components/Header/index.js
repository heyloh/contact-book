import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
  return(
    <div className="header-container">
      <h1>Agenda</h1>
      <div className="links-container">
        <Link to="/SignInUp">Entrar</Link>
      </div>
    </div>
  );
}

export default Header;
