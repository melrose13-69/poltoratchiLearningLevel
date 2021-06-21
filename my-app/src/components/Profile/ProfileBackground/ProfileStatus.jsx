import React, { useEffect, useState } from 'react';
import s from './ProfileBackground.module.scss';


const ProfileStatusWithHooks = props => {
    const [editMode, setMode] = useState( false );
    const [status, setStatus] = useState( props.status );

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const handleEditMode = editMode => {
        setMode( editMode );

        if ( !editMode ) {
            if ( status !== props.status ) props.updateStatus( status );
        }
    };

    const handleEditStatus = e => {
        setStatus( e.currentTarget.value );
    };

    return (
        <div className={ s.statusWrapper }>
            { !editMode &&
            <div>
                <span onDoubleClick={ () => handleEditMode( true ) }>{ status || 'Write your status' }</span>
            </div>
            }
            { editMode &&
            <div className={ s.editStatus }>
                <div>
                    <input onChange={ ( e ) => handleEditStatus( e ) } autoFocus={ true } onBlur={ () => handleEditMode( false ) }
                           type='text' value={ status }/>
                </div>
            </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;