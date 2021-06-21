const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {mame: 'Name1', id: 22, text: action.newMessageText, action: 'from'}
                ]
            };

        default:
            return state;
    }
};

export const addMessageAC = newMessageText => ({type: ADD_MESSAGE, newMessageText});


export default dialogsReducer;