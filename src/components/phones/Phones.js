import React, { Component } from 'react';
// import Phone from './phone/Phone';

class Phones extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="phones">
        <h2>{this.props[0].category}</h2>
      </section>
    );
  }
}

export default Phones;
