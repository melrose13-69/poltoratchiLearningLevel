import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../../common/FormsControls/FormsControls';
import { requiredField } from '../../../utils/validators/validators';
import CaptchaLogin from '../CaptchaLogin/CaptchaLogin';
import s from '../../common/FormsControls/FormsControls.module.scss';


const LoginForm = ( { handleSubmit, error, captcha } ) => {

    return (
        <form onSubmit={ handleSubmit }>
            { error && <div className={ s.formError }>${ error }</div> }
            <div>
                { createField( [requiredField], { type : 'text', name : 'email' }, 'Email', Input ) }
            </div>
            <div>
                { createField( [requiredField], { type : 'password', name : 'password' }, 'Password', Input ) }
            </div>
            <div>
                { createField( [], { type : 'checkbox', name : 'rememberMe' }, null, Input ) }
                <label>remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
            { captcha && <CaptchaLogin captcha={ captcha }/> }
        </form>
    );
};

export default reduxForm( { form : 'login' } )( LoginForm );