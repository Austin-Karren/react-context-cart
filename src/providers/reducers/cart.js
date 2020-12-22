export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_ALL_PRODUCT = 'REMOVE_ALL_PRODUCT';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.id === product.id
    );

    if(updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1});
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        if(updatedItem.quantity < product.maxItem){
            updatedItem.quantity++;
        }
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
    console.log('removing product with id: ' + productId);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(i => i.id === productId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart }
}

const changeProductQuantity = (productId, selectedQuantity, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(index => index.id === productId);
    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity = Number(selectedQuantity);
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart }
}

const removeAllProductFromCart = (productId, state) => {
    console.log('removing all of product from cart with id: ' + productId)
    const updatedCart = [...state.cart];
    const removedItemIndex = updatedCart.findIndex(index => index.id === productId)
    const removedItem = {
        ...updatedCart[removedItemIndex]
    };
    removedItem.quantity = 0;
    updatedCart.splice(removedItemIndex, 1);
    return { ...state, cart: updatedCart }
}

const CartReducer = (state, action) => {

    const {product, productId, selectedQuantity} = action;

    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(product, state);
        case REMOVE_PRODUCT:
            return removeProductFromCart(productId, state);
        case REMOVE_ALL_PRODUCT:
            return removeAllProductFromCart(productId, state);
        case CHANGE_QUANTITY:
            return changeProductQuantity(productId, selectedQuantity, state);
        default:
            return {state};
    }
}

export default CartReducer;