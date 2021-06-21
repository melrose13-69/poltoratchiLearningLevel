import { setAuthUserData } from './auth-reducer';


const SET_INITIALIZED = 'app/SET_INITIALIZED';

const initialState = {
    initialized : false
};
const appReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized : true
            };
        default:
            return state;
    }
};

export const setInitializingSuccessAC = ( userId, email, login, isAuth ) => ({ type : SET_INITIALIZED });

export const initializeApp = () => dispatch => {
    const promise = dispatch( setAuthUserData() );

    Promise.all( [promise] )
           .then( () => {
               dispatch( setInitializingSuccessAC() );
           } );
};

export default appReducer;