import React from 'react';
import s from './Dialog.module.scss';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div data-user-id={props.userId} className={ s.dialog }>
            <span><img src="https://i.pinimg.com/originals/20/20/a2/2020a2a53aa8e79f321a84286cf33b28.jpg" alt=""/></span>
            <NavLink to={'/dialogs/' + props.userId}>{ props.userName }</NavLink>
        </div>
    )
}

export default Dialog;