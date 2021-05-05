import React from 'react';
import s from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";

const Dialogs = (props) => {

    const messageArea = React.createRef();

    const onSendMessage = () => {
        props.sendMessage();
    };

    const onMessageChange = () => {
        const newText = messageArea.current.value;
        props.messageChange(newText);
    };

    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <Dialog userName={d.name} userId={d.id}/>);

    const messagesElements = props.dialogsPage.messages
        .map(m => <Message action={m.action} userName={m.name} messageText={m.text}/>);

    return (
        <div className={s.chat}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.messageSend}>
                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} ref={messageArea} name="" id="" cols="30" rows="10">
                </textarea>
                <button onClick={onSendMessage}>отправить</button>
            </div>
        </div>
    )
};

export default Dialogs;