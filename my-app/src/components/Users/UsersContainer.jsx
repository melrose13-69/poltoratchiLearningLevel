import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    changeCurrentPage,
    follow,
    getCurrentPageAC,
    getUsers,
    toggleFollowingProgressAC,
    unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    geTotalUsersCount,
    getPageSize,
    getUsersSS
} from '../../redux/users-selectors';


const UsersContainer = props => {

    useEffect( () => {
        props.getUsers( props.currentPage, props.pageSize );
    }, [props.currentPage] );

    const onPageChanged = pageNumber => {
        props.changeCurrentPage( pageNumber );
    };

    return <>
    { props.isFetching ? <Preloader/> : null }
    <Users totalUsersCount={ props.totalUsersCount }
           pageSize={ props.pageSize }
           currentPage={ props.currentPage }
           onPageChanged={ onPageChanged }
           users={ props.users }
           follow={ props.follow }
           unfollow={ props.unfollow }
           followingProgress={ props.followingProgress }
    />
    </>;
};

const mapStateToProps = ( state ) => {
    return {
        users : getUsersSS( state ),
        pageSize : getPageSize( state ),
        totalUsersCount : geTotalUsersCount( state ),
        currentPage : getCurrentPage( state ),
        isFetching : getIsFetching( state ),
        followingProgress : getFollowingProgress( state )
    };
};

export default compose(
    connect( mapStateToProps, {
        follow,
        unfollow,
        getCurrentPageAC,
        toggleFollowingProgressAC,
        getUsers,
        changeCurrentPage
    } ),
    withAuthRedirect
)( UsersContainer );
