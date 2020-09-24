import React, { Component } from 'react';
import product_image_placeholder from '../../../assets/product_image_placeholder.png';
import PropTypes from 'prop-types';
import './Phone.css';

class Phone extends Component {
  render() {
    return (
      <section className="phone">
        <h3>{this.props.name}</h3>
        <img src={product_image_placeholder} />
        <footer>
          <span>{this.props.price}</span>
          <button>add to cart</button>
        </footer>
      </section>
    );
  }
}

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Phone;
