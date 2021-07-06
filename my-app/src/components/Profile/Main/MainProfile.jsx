import React from 'react';
import s from './MainProfile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const MainProfile = props => {

    return (
        <div className={ s.mainProfile }>
            <ProfileInfo profile={ props.profile } isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    );
};

export default MainProfile;