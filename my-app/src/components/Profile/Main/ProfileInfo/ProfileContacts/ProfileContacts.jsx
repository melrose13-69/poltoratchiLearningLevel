import React from 'react';


export const ProfileContacts = ( { contactKey, contactValue, isOwner, goToEditMode } ) => {
    if ( contactValue !== null ) {
        if ( contactValue.indexOf( 'https://' ) ) {
            contactValue = `https://${contactValue}`;
        }
    } else {
        return true;
    }
    return (
            <div key={ contactKey }>
                <span>{ contactKey }</span>
                <a target='_blank' rel='noreferrer'
                   href={ contactValue }>{ contactValue }</a>
            </div>
    );
};

export const ProfileForm = ( { contactKey, contactValue, isOwner, goToEditMode } ) => {

    return (
        <div>form</div>
    );
};