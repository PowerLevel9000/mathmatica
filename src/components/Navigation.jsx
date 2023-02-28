import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="App-navigation">
    <div className="logo">
      <Link to="/">
        Mathmatica
      </Link>
    </div>
    <div className="menu">
      <li>
        <Link to="/mathmatica">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </div>
  </nav>
);

export default Navigation;
