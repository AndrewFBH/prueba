import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <header>
        <div className='nav'>
            <div className='nav-links'>
                <li>
                    <NavLink exact activeClassName='active' to='/home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/characters'>
                        Personajes
                    </NavLink>
                </li>
            </div>
        </div>
    </header>
)

export default Nav;