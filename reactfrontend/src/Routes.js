import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from './Core/Home';
import Signup from './User/Signup';


const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Home}  exact/>
            <Route path="/signup" component={Signup}  exact/>
        </Switch>
        
        </BrowserRouter>
    )
}

export default Routes
