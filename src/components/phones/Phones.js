import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from './phone/Phone';
import './Phones.css';

class Phones extends Component {
  render() {
    const { type, products, addProducts } = this.props;
    return (
      <section className="phones">
        <h2>{type}</h2>
        <section className="phone-list">
          {products.map((item, index) => (
            <Phone
              key={index}
              name={item.name}
              price={item.price}
              addProducts={addProducts}
            />
          ))}
        </section>
      </section>
    );
  }
}

Phones.propTypes = {
  type: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  addProducts: PropTypes.func.isRequired,
};

export default Phones;
