import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.profile,
        posts: state.profilePage.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addPostActionCreator());
        },
        messageChange: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText));
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;