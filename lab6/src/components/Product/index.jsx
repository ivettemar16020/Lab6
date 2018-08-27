import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './newproduct.css';

const dispatchAll = dispatch => ({
  nameHandler: (name) => {
    dispatch(actions.addName(name));
  },
  priceHandler: (price) => {
    dispatch(actions.addPrice(price));
  },
  quantityHandler: (quantity) => {
    dispatch(actions.addQuantity(quantity));
  },
  addProduct: () => {
    dispatch(actions.addNewProduct());
  },
});

const Product = ({
  nameHandler,
  priceHandler,
  quantityHandler,
  addProduct,
}) => (
  <div className="new-product">
    <h2>Crear nuevo producto</h2>
    <label htmlFor="name">
      <input
        id="name"
        placeholder="nombre"
        onChange={(e) => {
          nameHandler(e.target.value);
        }}
      />
    </label>
    <label htmlFor="price">
      <input
        id="price"
        placeholder="precio"
        onChange={(e) => {
          priceHandler(parseFloat(e.target.value));
        }}
      />
    </label>
    <label htmlFor="quantity">
      <input
        id="quantity"
        placeholder="cantidad"
        onChange={(e) => {
          quantityHandler(parseInt(e.target.value, 10));
        }}
      />
    </label>
    <button type="button" class="productBtn" onClick={addProduct}>Crear producto</button>
  </div>
);

Product.propTypes = {
  nameHandler: PropTypes.func.isRequired,
  priceHandler: PropTypes.func.isRequired,
  quantityHandler: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default connect(undefined, dispatchAll)(Product);
