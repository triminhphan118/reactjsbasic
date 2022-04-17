import React from 'react';
import './style.scss';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__list-item '>
                        <NavLink to="/" className='nav__link'>Home</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to="/todo" className='nav__link'>Todo</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to="/contact" className='nav__link'>Contact</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to="/about" className='nav__link'>About</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to="/users" className='nav__link'>Users</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;