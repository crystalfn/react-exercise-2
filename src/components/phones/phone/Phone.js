import React, { Component } from 'react';
import product_image_placeholder from '../../../assets/product_image_placeholder.png';

class Phone extends Component {
  render() {
    return (
      <section className="phone">
        <h3></h3>
        <img src={product_image_placeholder} />
        <footer>
          <span></span>
          <button>add to cart</button>
        </footer>
      </section>
    );
  }
}

export default Phone;
