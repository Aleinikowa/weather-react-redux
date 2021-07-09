import React from 'react';
import '../assets/img/styles/App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        paddingRight: '50px'

    }
    return (
        <nav>
            <ul className="nav-li">
                <li><Link style={navStyle} to='/'>Home</Link></li>
                <li><Link style={navStyle} to='/history'>History</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;