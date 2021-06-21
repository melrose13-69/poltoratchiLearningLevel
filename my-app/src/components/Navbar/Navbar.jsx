import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import Friends from "./Friends/Friends";

const Navbar = props => {

    let friendName = props.friends
        .map(f => <Friends userName={f.name} userId={f.id}/>);

    return (
        <div className={s.navWrapper}>
            <div className={s.logo}>
                <img src='https://html.crumina.net/html-olympus/img/logo.webp' alt='logo'/>
                {/*<div className={s.name}>*/}
                    {/*<span>IMPETUS</span>*/}
                    {/*<span>future</span>*/}
                {/*</div>*/}
            </div>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>P</NavLink></div>
                <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>M</NavLink></div>
                <div className={s.item}><NavLink to='/news' activeClassName={s.active}>N</NavLink></div>
                <div className={s.item}><NavLink to='/music' activeClassName={s.active}>M</NavLink></div>
                <div className={s.item}><NavLink to='/settings' activeClassName={s.active}>S</NavLink></div>
                <div className={s.item}><NavLink to='/users' activeClassName={s.active}>U</NavLink></div>
            </nav>
            <div className={s.friends}>
                <div className={s.users}>{friendName}</div>
            </div>
        </div>
    )
};

export default Navbar;