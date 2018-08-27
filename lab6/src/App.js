import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenido a la tienda virtual</h1>
        <ProductList />
        <Product />
      </div>
    );
  }
}

export default App;
