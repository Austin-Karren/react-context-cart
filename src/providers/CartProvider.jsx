import React, { useReducer, createContext } from 'react';
import CartReducer, { ADD_PRODUCT, REMOVE_PRODUCT, REMOVE_ALL_PRODUCT, CHANGE_QUANTITY } from './reducers/cart';

export const ShopContext = createContext({
    products: [
        { id: "p1", title: "Gaming Mouse", price: 29.99, maxItem: 2},
        { id: "p2", title: "Harry Potter 3", price: 9.99, maxItem: 5},
        { id: "p3", title: "Used plastic bottle", price: 0.99, maxItem: 6},
        { id: "p4", title: "Half-dried plant", price: 2.99, maxItem: 3}
    ],
    cart: [],
    addProductToCart: (product) => {},
    removeProductFromCart: (productId) => {},
    removeAllProductFromCart: (productId) => {},
    changeQuantity: (productId) => {}
})

const CartProvider = props => {
    const products = [
        { id: "p1", title: "Gaming Mouse", price: 29.99, maxItem: 2},
        { id: "p2", title: "Harry Potter 3", price: 9.99, maxItem: 5},
        { id: "p3", title: "Used plastic bottle", price: 0.99, maxItem: 6},
        { id: "p4", title: "Half-dried plant", price: 2.99, maxItem: 3}
    ];

    const [cartState, dispatch] = useReducer(CartReducer, {cart: []});

    const addProductToCart = product => {
        setTimeout(() => {
            dispatch({type: ADD_PRODUCT, product });
        }, 700);
    };

    const removeProductFromCart = productId => {
        setTimeout(() => {
            dispatch({ type: REMOVE_PRODUCT, productId});
        }, 700)
    }

    const removeAllProductFromCart = productId => {
        setTimeout(() => {
            dispatch({type: REMOVE_ALL_PRODUCT, productId});
        }, 700)
    }

    const changeQuantity = (productId, selectedQuantity) => {
        setTimeout(() => {
            dispatch({type: CHANGE_QUANTITY, productId, selectedQuantity})
        }, 700)
    }

    return(
        <ShopContext.Provider
            value={{
                products,
                cart: cartState.cart,
                addProductToCart,
                removeProductFromCart,
                removeAllProductFromCart,
                changeQuantity,
            }}
        >
            {props.children}
        </ShopContext.Provider>
    )
}

export default CartProvider;