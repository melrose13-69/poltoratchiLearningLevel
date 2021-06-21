import React from 'react';
import { Field } from 'redux-form';
import s from './CaptchaLogin.module.scss'


const CaptchaLogin = props => {
    return (
        <div>
            <img className={s.img} src={props.captcha} alt='Refresh the page'/>
            <Field type='text' component={'input'} name='captcha'/>
        </div>
    );
};

export default CaptchaLogin;