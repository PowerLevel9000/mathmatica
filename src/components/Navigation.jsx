import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="App-navigation">
    <div role="menuitem" className="logo">
      <Link to="/mathmatica">
        Mathmatica
      </Link>
    </div>
    <div role="menuitem" className="menu">
      <li role="list">
        <Link to="/mathmatica">Home</Link>
      </li>
      <li role="list">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li role="list">
        <Link to="/quote">Quote</Link>
      </li>
    </div>
  </nav>
);

export default Navigation;
