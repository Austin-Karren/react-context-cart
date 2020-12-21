import React from 'react';
import './Product.css'

import { ShopContext } from '../providers/CartProvider';
import MainNavigation from '../components/MainNavigation';

const Product = () => {
    return(
        <div className='Product'>
            <ShopContext.Consumer>
                {context => (
                    <React.Fragment>
                        <MainNavigation
                            cartItemNumber={context.cart.reduce((count, curItem) => {
                                return count + curItem.quantity;
                            }, 0)}
                        />
                        <main className='products'>
                            <ul>
                                {context.products.map(product => (
                                    <li key={product.id}>
                                        <div>
                                            <strong>{product.title}</strong> - ${product.price}
                                        </div>
                                        <div>
                                            <button
                                                onClick={context.addProductToCart.bind(this, product)}
                                            >Add to Cart
                                        </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </main>
                    </React.Fragment>
                )}
            </ShopContext.Consumer>
        </div>
    )
}

export default Product;