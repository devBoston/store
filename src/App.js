import React from 'react';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

import {Switch, Route} from 'react-router-dom';

import './App.css';


function App() {
    return (
        <div>
            <Header/>
            <Switch>
            <Route exact='/' path component={HomePage}/>
            <Route path='/shop'  component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
