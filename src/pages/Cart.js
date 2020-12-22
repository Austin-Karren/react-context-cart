import React, { useContext, useEffect } from 'react';
import './Cart.css';

import { ShopContext } from '../providers/CartProvider';
import MainNavigation from '../components/MainNavigation';

const Cart = () => {
    const context = useContext(ShopContext);

    useEffect(() => {
        console.log(context);
    },[]);

    const options = (maxAllow) => {
      let list = [];
      for (let i = 0; i <= maxAllow; i++) {
        list.push(<option key={i} value={i}>{i}</option>);
      }
      return list;
    }

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
                <select type='select' value={cartItem.quantity} onChange={(e) => context.changeQuantity(cartItem.id, e.target.value)}>
                  {options(cartItem.maxItem)}
                </select>
              </div>
              <div>
                <button
                  onClick={() => context.removeProductFromCart(
                    cartItem.id
                  )}
                >
                  -
                </button>
                <button onClick={() => context.addProductToCart(cartItem)}>
                  +
                </button>
                <button
                  onClick={() => context.removeAllProductFromCart(
                    cartItem.id
                  )}
                >
                  Delete
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