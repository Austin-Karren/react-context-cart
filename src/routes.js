import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';

export default (
    <Switch> 
        <Route exact path='/' component={ProductPage} />
        <Route exact path='/cart' component={CartPage} />
    </Switch>
);