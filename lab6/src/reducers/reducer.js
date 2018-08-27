const defaultState = {
  products: [{
    name: 'Nombre',
    price: 'Precio',
    quantity: 'Cantidad',
  },
  {
    name: 'Mango',
    price: 5,
    quantity: 10,
  },
  {
    name: 'Sandía',
    price: 35,
    quantity: 1,
  }],
  newName: '',
  newPrice: 0,
  newQuantity: 0,
};

const ProductReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'NAME_ADDED':
    return {
      ...state,
      newName: action.name,
    };
  case 'PRICE_ADDED':
    return {
      ...state,
      newPrice: action.price,
    };
  case 'QUANTITY_ADDED':
    return {
      ...state,
      newQuantity: action.quantity,
    };
  case 'NEW_PRODUCT_ADDED':
    return {
      ...state,
      products: [
        ...state.products,
        {
          name: state.newName,
          price: state.newPrice,
          quantity: state.newQuantity,
        },
      ],
    };
  default:
    return state;
  }
};

export default ProductReducer;
