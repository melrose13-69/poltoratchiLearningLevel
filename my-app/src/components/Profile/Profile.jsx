import React from 'react';
import s from './Profile.module.scss';
import {NavLink, Route} from "react-router-dom";
import MainProfile from "./Main/MainProfile";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <div className={s.bgContent}>
                <img className={s.bgImg}
                     src='https://html.crumina.net/html-olympus/img/top-header1.webp'
                     alt='backgroud'/>
                <div className={s.logo}>
                    <a href="#a">
                        <img src='https://html.crumina.net/html-olympus/img/author-main1.webp' alt='logo'/>
                    </a>
                    <div className={s.name}>Victor Poltoratchi</div>
                    <div className={s.country}>Moldova, MD</div>
                </div>
                <div className={s.profileList}>
                    <div>
                        <NavLink to='/profile/main' activeClassName={s.active}>Main</NavLink>
                        <NavLink to='/profile/friends' activeClassName={s.active}>Friends</NavLink>
                    </div>
                    <div>
                        <NavLink to='/profile/photos' activeClassName={s.active}>Photos</NavLink>
                        <NavLink to='/profile/about' activeClassName={s.active}>About</NavLink>
                    </div>
                </div>
            </div>
            <Route path='/profile/main' render={() => <MainProfile/>}/>
        </div>
    )
};

export default Profile;