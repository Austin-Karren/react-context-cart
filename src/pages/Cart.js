import React, { useContext, useEffect } from 'react';
import './Cart.css';

import { ShopContext } from '../providers/CartProvider';
import MainNavigation from '../components/MainNavigation';

const Cart = () => {
    const context = useContext(ShopContext);

    useEffect(() => {
        console.log(context);
    },[]);

    return(
        <div className='Cart'>
            <MainNavigation
                cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
                }, 0)}
            />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
        </div>
    )
}

export default Cart;