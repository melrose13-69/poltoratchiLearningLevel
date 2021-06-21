import React from 'react';
import s from './Profile.module.scss';
import MainProfile from './Main/MainProfile';
import ProfileBackground from './ProfileBackground/ProfileBackground';


const Profile = props => {


    return (
        <div className={ s.profile }>
            <ProfileBackground profile={ props.profile } status={ props.status } updateStatus={ props.updateStatus }/>
            <MainProfile profile={ props.profile }/>
        </div>
    );
};

export default Profile;