import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../../common/preloader/Preloader';


const ProfileInfo = props => {
    const contacts = [];

    if ( props.profile === null || props.profile === undefined || props.profile === '' ) {
        return <Preloader/>;
    }

    for ( let contact in props.profile.contacts ) {
        if ( props.profile.contacts.hasOwnProperty( contact ) ) {
            let data = props.profile.contacts[contact];
            if ( data !== '' && data !== null && data !== undefined && data !== 'null' ) {
                if ( data.indexOf( 'https://' ) ) {
                    data = `https://${data}`;
                }
                contacts.push( <div><span>{ contact }</span><a target='_blank' rel="noreferrer" href={ data }>{ data }</a></div> );
            }
        }
    }
    return (
        <div className={ s.profileWrapper }>
            <div className='global-block-title'>Profile Info</div>
            <div className={ s.contentInner }>
                <span className={ s.name }>Name: <span>{ props.profile.fullName }</span></span>
                <span className={ s.name }>Name: <span>{ props.profile.fullName }</span></span>
            </div>
            <div className={ s.socialInner }>
                { contacts }
            </div>
        </div>
    );
};

export default ProfileInfo;