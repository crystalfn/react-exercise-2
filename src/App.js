import React, { Component } from 'react';
import Header from './components/header/Header';
import Phones from './components/phones/Phones';
import './App.scss';

class App extends Component {
  state = {
    categories: [],
    productsNumber: 0,
  };

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.categoriesBuikd(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  categoriesBuikd = (data) => {
    const { state } = this;
    const { categories } = state;

    let catagoryTypes = [...new Set(data.map((item) => item.category))];

    catagoryTypes.forEach((catagoryTypes) => {
      let category = {
        type: catagoryTypes,
        products: [],
      };

      data.forEach((item) => {
        if (item.category === catagoryTypes) {
          category.products.push({
            name: item.name,
            price: item.price,
          });
        }
      });

      categories.push(category);

      this.setState({
        ...state,
        categories,
      });
    });
  };

  handleAddProduct = () => {
    const { state } = this;
    const { productsNumber } = state;

    this.setState({
      ...state,
      productsNumber: productsNumber + 1,
    });
  };

  render() {
    return (
      <main className="app">
        <Header productsNumber={this.state.productsNumber} />
        {this.state.categories.map((item, index) => (
          <Phones
            key={index}
            type={item.type}
            products={item.products}
            addProducts={this.handleAddProduct}
          />
        ))}
      </main>
    );
  }
}

export default App;
