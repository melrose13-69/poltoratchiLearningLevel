const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {message: 'Hi, how a you?', likesCount: 10},
        {message: 'It\'s my first post!', likesCount: 7}
    ],
    newPostText: 'asd',
    profileInfo: [
        {
            firstName: 'Victor', lastName: 'Poltoratchi',
            birthday: '02.03.1995', country: 'Chisinau',
            website: 'https://poltoratchi.com'
        }
    ]
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            if (newPost.message === '') {
                return;
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            break;
    }
    return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
});

export default profileReducer;