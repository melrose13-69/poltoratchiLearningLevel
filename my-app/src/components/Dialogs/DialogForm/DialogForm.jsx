import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(100);

const DialogForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[requiredField, maxLength]}
                   name={'newMessageText'}
                   placeholder={'Write your message'}/>
            <button>отправить</button>
        </form>
    )
};


export default reduxForm({form: 'dialogMessage'})(DialogForm);