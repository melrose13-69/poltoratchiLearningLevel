import { profileAPI } from '../api/api';


const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS_TEXT = 'profile/SET_STATUS_TEXT';
const ADD_STATUS_TEXT = 'profile/ADD_STATUS_TEXT';

const initialState = {
    posts : [
        { message : 'Hi, how a you?', likesCount : 10 },
        { message : 'It\'s my first post!', likesCount : 7 }
    ],
    profile : null,
    status : ''
};

const profileReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case ADD_POST:
            return {
                ...state,
                posts : [...state.posts, { message : action.newPostText, likesCount : 0 }]
            };
        case DELETE_POST:
            return { ...state, posts : state.posts.filter( p => action.postId !== p.id ) };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile : action.profile
            };
        case SET_STATUS_TEXT:
            return {
                ...state,
                status : action.status
            };
        case ADD_STATUS_TEXT:
            return {
                ...state,
                status : action.status
            };
        default:
            return state;
    }
};

export const addPostAC = newPostText => ({ type : ADD_POST, newPostText });
export const deletePostAC = postId => ({ type : DELETE_POST, postId });
export const setUserProfileAC = profile => ({ type : SET_USER_PROFILE, profile });
export const setStatusTextAC = status => ({ type : SET_STATUS_TEXT, status });
export const updateStatusTextAC = status => ({ type : ADD_STATUS_TEXT, status });

export const addPost = newPostText => dispatch => {
    dispatch( addPostAC( newPostText ) );
};

export const setUserProfile = userId => async dispatch => {
    const resp = await profileAPI.getUserProfile( userId );
    dispatch( setUserProfileAC( resp ) );
};

export const getStatus = userId => async dispatch => {
    const resp = await profileAPI.getStatus( userId );
    dispatch( setStatusTextAC( resp ) );
};

export const updateStatus = status => async dispatch => {
    const resp = await profileAPI.updateStatus( status );
    if ( resp.resultCode === 0 ) {
        dispatch( updateStatusTextAC( status ) );
    }
};

export default profileReducer;