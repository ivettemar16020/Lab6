export const addName = name => ({
  type: 'NAME_ADDED',
  name,
});

export const addPrice = price => ({
  type: 'PRICE_ADDED',
  price,
});

export const addQuantity = quantity => ({
  type: 'QUANTITY_ADDED',
  quantity,
});

export const addNewProduct = () => ({
  type: 'NEW_PRODUCT_ADDED',
});
