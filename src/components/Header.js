import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header>
            <nav>
                <ul id='nav-menu'>
                    <li>
                        <div className='menu-text' id='menu-left'>
                            <NavLink className='navbar-item' activeclassname='is-active' to='/'>
                                Home
                            </NavLink>
                            <NavLink className='navbar-item' activeclassname='is-active' to='/shop'>
                                Shop
                            </NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink className='navbar-item' activeclassname='is-active' id='menu-logo' to='/'>
                            Vinners
                        </NavLink>
                    </li>
                </ul>

                {/* TODO: mobile view code, reference https://www.freecodecamp.org/news/react-router-tutorial/ */}
            </nav>
        </header>
    );
}

export default Header;