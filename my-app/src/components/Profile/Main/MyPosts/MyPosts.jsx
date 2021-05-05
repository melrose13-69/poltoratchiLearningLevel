import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const postsElements = props.posts
        .map(p => <Post likeCount={p.likesCount} message={p.message}/>);

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const newText = newPostElement.current.value;
        props.updateNewPostText(newText);
    };

    return (
        <div className='global-background global-inner'>
            <div className={s.inner}>
                <div className={s.new}>
                    <div className={s.textarea}>
                        <textarea onChange={onPostChange} ref={newPostElement} placeholder='Your news...'
                                  value={props.newPostText}/>
                    </div>
                    <div className={s.btn}>
                        <button onClick={onAddPost} type='button'>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.postsItems}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts