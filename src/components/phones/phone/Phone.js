import React, { Component } from 'react';
import product_image_placeholder from '../../../assets/product_image_placeholder.png';
import PropTypes from 'prop-types';
import './Phone.css';

class Phone extends Component {
  render() {
    const { name, price, addProducts } = this.props;

    return (
      <section className="phone">
        <h3>{name}</h3>
        <img src={product_image_placeholder} />
        <footer>
          <span>{price}</span>
          <button onClick={addProducts}>add to cart</button>
        </footer>
      </section>
    );
  }
}

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addProducts: PropTypes.func.isRequired,
};

export default Phone;
