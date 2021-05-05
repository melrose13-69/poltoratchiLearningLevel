const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
        {id: 4, name: 'Name 4'},
        {id: 5, name: 'Name 5'},
    ],
    messages: [
        {name: 'Name1', id: 6, text: 'Hello', action: 'for'},
        {name: 'Name2', id: 7, text: 'Hey!', action: 'from'},
        {name: 'Name3', id: 8, text: 'Arr', action: 'for'},
        {name: 'Name4', id: 9, text: 'Urr', action: 'from'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                mame: 'Name1',
                id: 22,
                text: state.newMessageText,
                action: 'from'
            };
            if (newMessage.text === '') {
                return;
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;
        default:
            break;
    }
    return state;
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
});

export default dialogsReducer;