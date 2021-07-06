import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Redirect } from 'react-router-dom';


const Login = props => {

    const onSubmit = formData => {
        props.login( formData.email, formData.password, formData.rememberMe , formData.captcha);
    };

    if ( props.isAuth ) {
        return <Redirect to={ '/profile' }/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={ onSubmit } captcha={props.captcha}/>
        </div>
    );
};

export default Login;