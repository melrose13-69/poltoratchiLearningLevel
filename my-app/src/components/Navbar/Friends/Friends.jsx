import React from 'react';
import s from './Friends.module.scss';

const Friends = (props) => {
    return (
        <div data-user-id={props.userId} className={s.user}>
            <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
                 alt="0"/>
            <div>{props.userName}</div>
        </div>
    )
}

export default Friends;