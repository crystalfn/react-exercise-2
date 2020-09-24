import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from './phone/Phone';
import './Phones.css';

class Phones extends Component {
  render() {
    return (
      <section className="phones">
        <h2>{this.props.type}</h2>
        <section className="phone-list">
          {this.props.products.map((item, index) => (
            <Phone key={index} name={item.name} price={item.price} />
          ))}
        </section>
      </section>
    );
  }
}

Phones.propTypes = {
  type: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default Phones;
