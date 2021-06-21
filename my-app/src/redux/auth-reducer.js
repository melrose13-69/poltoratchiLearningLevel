import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'auth/SET_USER_DATA';
const CAPTCHA = 'auth/CAPTCHA';

const initialState = {
    userId : null,
    login : null,
    email : null,
    isFetching : false,
    isAuth : false,
    password : null,
    isRemembered : false,
    captcha : false
};
const authReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case CAPTCHA:
            return {
                ...state,
                captcha : action.captcha
            };
        default:
            return state;
    }
};

export const setAuthUserDataSuccessAC = ( userId, email, login, isAuth ) => ({
    type : SET_USER_DATA,
    payload : { userId, email, login, isAuth }
});

export const captchaAC = ( captcha ) => ({
    type : CAPTCHA,
    captcha
});

export const setAuthUserData = ( id, email, login, isAuth ) => async dispatch => {
    const resp = await authAPI.authUser();

    if ( resp.resultCode === 0 ) {
        let { id, email, login } = resp.data;
        dispatch( setAuthUserDataSuccessAC( id, email, login, true ) );
    }

};
export const login = ( email, password, rememberMe, captcha = false ) => async dispatch => {
    const resp = await authAPI.login( email, password, rememberMe, captcha );
    const message = resp.messages.length > 0 ? resp.messages[0] : 'Some error';

    switch( resp.resultCode ) {
        case 0:
            dispatch( setAuthUserData() );
            break;
        case 10:
            dispatch( getCaptcha() );
            dispatch( stopSubmit( 'login', { _error : message } ) );
            break;
        case 1:
            dispatch( stopSubmit( 'login', { _error : message } ) );
            break;
    }
};

export const logout = () => async dispatch => {
    const resp = await authAPI.logout();

    if ( resp.resultCode === 0 ) {
        dispatch( setAuthUserDataSuccessAC( null, null, null, false ) );
        dispatch( captchaAC( false ) );
    }
};

export const getCaptcha = () => async dispatch => {
    const resp = await authAPI.captcha();

    dispatch( captchaAC( resp.url ) );
};

export default authReducer;