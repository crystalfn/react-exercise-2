import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import shoppingcar from '../../assets/shoppingcar.png';

const Header = (props) => {
  const { productsNumber } = props;
  return (
    <header>
      <h1>Store</h1>
      <section>
        <img src={shoppingcar} />
        <p>
          <span>{productsNumber}</span>
        </p>
      </section>
    </header>
  );
};

Header.propTypes = {
  productsNumber: PropTypes.number.isRequired,
};

export default Header;
