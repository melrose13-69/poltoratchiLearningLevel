import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {

    return (
            <div className={s.profileWrapper}>
                <div className='global-block-title'>Profile Info</div>
                <div className={s.contentInner}>
                    <span className={s.name}>Name: <span>{props.firstName}</span></span>
                    <span className={s.date}>Birthday: <span>{props.birthday}</span></span>
                    <span className={s.Country}>Country: <span>{props.country}</span></span>
                    <span className={s.site}>Website: <span>{props.website}</span></span>
                </div>
                <div className={s.socialInner}>
                    <a href="">Facebook</a>
                    <a href="">VK</a>
                    <a href="">Phone</a>
                </div>
            </div>
    )
}

export default ProfileInfo;