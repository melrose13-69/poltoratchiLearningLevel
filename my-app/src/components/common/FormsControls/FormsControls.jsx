import React from 'react';
import s from './FormsControls.module.scss';
import { Field } from 'redux-form';


const FormControl = ( { input, meta: {touched, error}, element, ...props } ) => {
    const isError = touched && error;

    switch( element ) {
        case 'input':
            element = <input { ...input } { ...props }/>;
            break;
        case 'textarea':
            element = <textarea { ...input } { ...props }/>;
            break;
        default:
            element = '';
    }

    return (
        <div className={ isError ? `${s.formControl} ${s.error}` : s.formControl }>
            <div>
                { element }
            </div>
            <div>
                { isError && <span className={ s.someError }>{ error }</span> }
            </div>
        </div>
    );
};

export const Textarea = ( props ) => {
    return <FormControl { ...props } element='textarea'/>;
};

export const Input = ( props ) => {
    return <FormControl { ...props } element='input'/>;
};

export const createField = ( validators, { type, name }, placeholder, Component ) => {
    return <Field validate={ validators } type={ type } name={ name } placeholder={ placeholder } component={ Component }/>;
};