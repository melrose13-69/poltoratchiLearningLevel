import React from 'react';
import s from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";
import DialogForm from "./DialogForm/DialogForm";



const Dialogs = props => {

    const addNewMessage = value => {
        props.addMessageAC(value.newMessageText);
    };

    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <Dialog userName={d.name} userId={d.id} key={d.id}/>);

    const messagesElements = props.dialogsPage.messages
        .map(m => <Message action={m.action} userName={m.name} messageText={m.text} key={m.id}/>);

    return (
        <div className={s.chat}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <DialogForm onSubmit={addNewMessage}/>
        </div>
    )
};

export default Dialogs;