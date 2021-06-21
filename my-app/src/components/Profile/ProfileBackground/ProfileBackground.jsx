import React from 'react';
import s from './ProfileBackground.module.scss';
import {NavLink} from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileBackground = props => {

    if (props.profile === null || !props.profile || props.profile === undefined || props.profile === '') {
        return <Preloader/>
    }

    return (
        <div className={s.bgContent}>
            <img className={s.bgImg}
                 src='https://html.crumina.net/html-olympus/img/top-header1.webp'
                 alt='backgroud' />
            <div className={s.logo}>
                <a href="/">
                    <img src={props.profile.photos.small} alt='logo'/>
                </a>
                <div className={s.name}>{props.profile.fullName}</div>
                {/*<div className={s.country}>{props.profile.lookingForAJob ?*/}
                    {/*<div><span className={s.lookwork}>Look work</span><span>{props.profile.lookingForAJobDescription}</span></div>*/}
                    {/*:*/}
                    {/*<div><span className={s.dontlookwork}>Don`t look work</span></div>}*/}
                {/*</div>*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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
    )
};

export default ProfileBackground;