import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';


const Header = props => {
    return (
        <header className={ s.header }>
            <div className='container'>
                <div className={ s.headerWrapper }>
                    <div className={ s.logo }>

                    </div>
                    <div className={ s.loginBlock }>
                        {
                            props.isAuth ?
                                <button onClick={props.logout}>Exit</button>
                                :
                                <NavLink to={ '/login' }>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;