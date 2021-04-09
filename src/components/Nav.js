import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-li">
                <li><Link style={navStyle} to='/about'>About</Link></li>
                <li><Link style={navStyle} to='/shop'>Shop</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;