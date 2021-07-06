import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helpers/object-helper';


const SHOW_MORE_USERS = 'users/SHOW_MORE_USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'users/TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS';
const CHANGE_CURRENT_PAGE = 'users/CHANGE_CURRENT_PAGE';

const initialState = {
    users : [],
    pageSize : 25,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : false,
    followingProgress : []
};


const usersReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case SHOW_MORE_USERS:
            return state;
        case FOLLOW:
            return {
                ...state,
                users : updateObjectInArray(state.users, action.userId, 'id', {followed : true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users : updateObjectInArray(state.users, action.userId, 'id', {followed : false})

            };
        case SET_USERS:
            return {
                ...state,
                users : [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage : action.currentPage
            };
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount : action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching : action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress : action.followingProgress ? [...state.followingProgress, action.userId] :
                    state.followingProgress.filter( id => id !== action.userId )
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage : action.currentPage
            };
        default:
            return state;
    }
};

const changeCurrentPageAC = currentPage => ({ type : CHANGE_CURRENT_PAGE, currentPage });
const followSuccessAC = userId => ({ type : FOLLOW, userId });
const unfollowSuccessAC = userId => ({ type : UNFOLLOW, userId });
const getUsersAC = users => ({ type : SET_USERS, users });
const getTotalUsersCountAC = totalUsersCount => ({ type : TOTAL_USERS_COUNT, totalUsersCount });
const toggleIsFetchingAC = isFetching => ({ type : TOGGLE_IS_FETCHING, isFetching });
export const getCurrentPageAC = currentPage => ({ type : SET_CURRENT_PAGE, currentPage });
export const toggleFollowingProgressAC = ( followingProgress, userId ) => ({
    type : TOGGLE_FOLLOWING_PROGRESS,
    followingProgress,
    userId
});



export const changeCurrentPage = currentPage => dispatch => {
    dispatch( changeCurrentPageAC( currentPage ) );
};

export const getUsers = ( page, pageSize ) => async dispatch => {
    dispatch( toggleIsFetchingAC( true ) );
    dispatch( getCurrentPageAC( page ) );

    const data = await usersAPI.getUsers( page, pageSize );

    dispatch( toggleIsFetchingAC( false ) );
    dispatch( getUsersAC( data.items ) );
    dispatch( getTotalUsersCountAC( data.totalCount ) );
};



const subscribe = async (dispatch, userId, APIMethod, actionCreator) => {
    dispatch( toggleFollowingProgressAC( true, userId ) );

    const resp = await APIMethod( userId );

    if ( resp.data.resultCode === 0 ) {
        dispatch( actionCreator( userId ) );
    }
    dispatch( toggleFollowingProgressAC( false, userId ) );
};


export const follow = userId => async dispatch => {
    subscribe(dispatch,userId, usersAPI.follow.bind(userId), followSuccessAC);
};

export const unfollow = userId => async dispatch => {
    subscribe(dispatch,userId, usersAPI.unfollow.bind(userId), unfollowSuccessAC);

};

export default usersReducer;