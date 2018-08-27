import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Product from '../Item';
import './productlist.css';

const mapStateToProps = state => ({
  products: state.ProductReducer.products,
});

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="product-list">
        {
          products.map(product => (
            <Product
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              andOne={undefined}
            />
          ))
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ProductList);
