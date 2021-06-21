import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import MyPostsForm from './MyPostsForm';


const MyPosts = React.memo( props => {

    const postsElements = props.posts.map( p => <Post likeCount={ p.likesCount } message={ p.message }/> );

    const addNewPost = value => {
        props.addPost( value.newPostText );
    };

    return (
        <div className='global-background global-inner'>
            <MyPostsForm onSubmit={ addNewPost }/>
            <div className={ s.postsItems }>
                { postsElements }
            </div>
        </div>
    );
} );

export default MyPosts;