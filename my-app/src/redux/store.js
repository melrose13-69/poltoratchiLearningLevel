import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        sideBar: {

        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        // this._state.sideBar =  profileReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;