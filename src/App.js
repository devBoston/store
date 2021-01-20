import React from 'react';
import HomePage from './pages/homepage/hompage.component';

import {Switch, Route} from 'react-router-dom';

import './App.css';


const HatsPage = () => (
    <div>
       <h1>
       hi hat page
           </h1> 
    </div>
)

function App() {
    return (
        <div>
            <Switch>
            <Route exact='/' path component={HomePage}/>
            <Route path='/hats'  component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
