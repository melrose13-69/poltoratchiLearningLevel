import React from 'react';
import s from './Message.module.scss';


const Message = props => {
    return (
        <div data-send={props.action} className={s.message}>
            <div data-user-id={props.id} className={s.user}>
                <img
                    src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
                    alt="0"/>
                <div>{props.userName}</div>
            </div>
            <div className={s.text}>{props.messageText}</div>
        </div>
    )
}

export default Message;