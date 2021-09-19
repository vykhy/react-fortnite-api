import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    const style = {
        color : 'white'
    }
    return (
        <nav>
            <Link style={style} to='/'><h3>Logo</h3></Link>
            <ul className='nav-links'>
                <Link style={style} to='/about'><li>About</li></Link>
                <Link style={style} to='/shop'><li>Shop</li></Link>
            </ul>
        </nav>
    )
}

export default Nav
