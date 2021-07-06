import React, { useState } from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../../common/preloader/Preloader';
import { ProfileContacts, ProfileForm } from './ProfileContacts/ProfileContacts';


const ProfileInfo = props => {
    const [editMode, setEditMode] = useState( false );

    if ( props.profile === null || props.profile === undefined ) {
        return <Preloader/>;
    }

    return (
        <div className={ s.profileWrapper }>
            <div className='global-block-title'>Profile Info</div>
            <div className={ s.contentInner }>
                <span className={ s.name }>Name: <span>{ props.profile.fullName }</span></span>
            </div>
            { !editMode
                ? <div className={ s.socialInner }>
                    { props.isOwner &&
                    <div>
                        <button onClick={() => {setEditMode(true)}}>edit</button>
                    </div>
                    }
                    {
                        Object.keys( props.profile.contacts ).map( key =>
                            <ProfileContacts contactKey={ key }
                                             contactValue={ props.profile.contacts[key] }
                                             isOwner={ props.isOwner }
                                             goToeditMode={ () => {setEditMode( true );} }/>
                        )
                    }
                </div>
                : <div className={ s.socialInner }>
                    <ProfileForm/>
                </div> }
        </div>
    );
};

export default ProfileInfo;