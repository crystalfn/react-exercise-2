import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.scss';

class App extends Component {
  state = {
    categories: [],
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

  render() {
    return (
      <main className="app">
        <Header />
      </main>
    );
  }
}

export default App;
