import React from 'react';
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validators';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import s from './MyPosts.module.scss';
import { compose } from 'redux';


const maxLength = maxLengthCreator(10);

const MyPostForm = props => {
    return (
        <form className={s.inner} onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
                <Field validate={[requiredField, maxLength]} placeholder='Your news...' component={Textarea} name='newPostText'/>
            </div>
            <div className={s.btn}>
                <button>Add post</button>
            </div>
        </form>
    )
};

export default compose(
    reduxForm({form: 'login'})
)(MyPostForm);