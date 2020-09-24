import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from './phone/Phone';

class Phones extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="phones">
        <h2>{this.props.type}</h2>
        {this.props.products.map((item, index) => (
          <Phone key={index} name={item.name} price={item.price} />
        ))}
      </section>
    );
  }
}

Phones.propTypes = {
  type: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default Phones;
