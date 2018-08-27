let nextProductId = 0

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_TO_LIST = 'ADD_PRODUCT_TO_LIST';

export const addProduct = text => ({
    type: 'ADD_PRODUCT',
    id: nextProductId++,
    text
})

export const addProductToList = id => ({
    type: 'ADD_PRODUCT_TO_LIST',
    id
})


  