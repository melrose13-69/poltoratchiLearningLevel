import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import s from './Profile.module.scss';
import Profile from './Profile';
import { getStatus, savePhoto, setUserProfile, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const ProfileContainer = ( props ) => {

    useEffect( () => {
        let userId = props.match.params.userId;

        if ( !userId ) {
            userId = props.authorizedUserId;
            if ( !userId ) {
                props.history.push( '/login' );
            }
        }
        props.setUserProfile( userId );
        props.getStatus( userId );

    }, [props.match.params.userId] );

    return (
        <div className={ s.profile }>
            <Profile { ...props }
                     status={ props.status }
                     updateStatus={ props.updateStatus }
                     isOwner={ !props.match.params.userId }
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profile : state.profilePage.profile,
        status : state.profilePage.status,
        authorizedUserId : state.auth.userId,
        isAuth : state.auth.isAuth
    };
};

export default compose(
    connect( mapStateToProps, { setUserProfile, getStatus, updateStatus, savePhoto } ),
    withRouter,
    withAuthRedirect
)( ProfileContainer );