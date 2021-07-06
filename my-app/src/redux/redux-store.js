import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';


const reducers = combineReducers( {
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sideBar : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer,
    app : appReducer,
    form : formReducer
} );


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware( thunkMiddleware ) ));


window.__store__ = store;

export default store;