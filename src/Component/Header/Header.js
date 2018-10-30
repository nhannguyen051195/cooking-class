import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
             
        <div>
                <header className="header" >

                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            Welcome to my cooking class
                        </h1>
                        <NavLink to="/recipe" className="btn btn--white btn--animated">Discover our recipes</NavLink>
                       <NavLink to='/logout' className="btn btn--white btn--animated">Logout</NavLink>

                    </div>
                </header>
            </div>
        );
    }
}

export default Header;