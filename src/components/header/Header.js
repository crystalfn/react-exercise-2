import React from 'react';
import './Header.css';
import shoppingcar from '../../assets/shoppingcar.png';

const Header = () => {
  return (
    <header>
      <h1>Store</h1>
      <section>
        <img src={shoppingcar} />
        <p></p>
      </section>
    </header>
  );
};

export default Header;
