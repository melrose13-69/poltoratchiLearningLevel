import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.item}>
            <span className={s.logo}>
                <img src="https://i.pinimg.com/originals/20/20/a2/2020a2a53aa8e79f321a84286cf33b28.jpg" alt=""/>
            </span>
            <p className={s.message}>{props.message}</p>
            <div><span>{props.likeCount} like</span></div>
        </div>
    )
}

export default Post;