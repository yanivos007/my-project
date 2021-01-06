import React, { Component } from 'react'
import { Link } from "react-router-dom";



class NavBar extends Component {
    render() {
        return (
                <div className="app">
                        <nav>
                            <ul className="nav-links">
                                <Link to="/">
                                    <li> home </li>
                                </Link>
                                <Link to="/login">
                                    <li> loginPage</li>
                                </Link>
                                <Link to="/register">
                                    <li> Register</li>
                                </Link>
                            </ul>
                        </nav>
                </div>
        )
    }
}

export default NavBar
