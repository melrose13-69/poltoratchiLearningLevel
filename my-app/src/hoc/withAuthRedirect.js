import React, { Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../components/common/preloader/Preloader';


const mapStateToPropsForRedirect = state => {
    return {
        isAuth : state.auth.isAuth
    };
};

export const withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() {
            if ( !this.props.isAuth ) return <Redirect to={ '/login' }/>;
            return <Component { ...this.props }/>;
        }
    }

    return connect( mapStateToPropsForRedirect )( RedirectComponent );
};

export const withSuspense = Component => {
    return ( props ) => {
        return (
            <Suspense fallback={ <Preloader/> }>
                <Component { ...props } />
            </Suspense>
        );
    };
};