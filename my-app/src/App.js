import React from 'react';
import './App.scss';
import Music from './components/Music/Music';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withAuthRedirect';
import LoginContainer from './components/Login/LoginContainer';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { connect, Provider } from 'react-redux';
import GlobalStyle from './globalStyles/globalStyles';
import { compose } from 'redux';

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer') );

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if ( !this.props.initialized ) {
            return <Preloader/>;
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <main className='app-wrapper__content'>
                    <Route path='/dialogs' render={ withSuspense( DialogsContainer ) }/>
                    <Route path='/profile/:userId?' render={ withSuspense( ProfileContainer ) }/>
                    <Route path='/news' component={ News }/>
                    <Route path='/music' component={ Music }/>
                    <Route path='/settings' component={ Settings }/>
                    <Route path='/users' render={ () => <UsersContainer/> }/>
                    <Route path='/login' render={ () => <LoginContainer/> }/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized : state.app.initialized
    };
};

const AppContainer = compose(
    withRouter,
    connect( mapStateToProps, { initializeApp } )
)( App );

const MainApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyle/>
                <Provider store={ store }>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default MainApp;