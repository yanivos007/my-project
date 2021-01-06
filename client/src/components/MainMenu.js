import React, { Component } from 'react'
import NavBar from './NavBar';
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import HomePage from './HomePage';



class MainMenu extends Component {
    render() {
        return (
            <Router>
                    <div>
               <NavBar />
               <Switch>
               <Route  path='/' exact component={HomePage} />
               <Route  path='/login' exact component={LoginPage} />
               <Route path='/register' component={RegisterPage} />
               </Switch>
           </div>
               </Router>
        )
    }
}

export default MainMenu
