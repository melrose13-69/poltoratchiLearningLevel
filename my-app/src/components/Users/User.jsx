import React from 'react';
import defaultUserLogo from '../../assets/images/fixUserLogo.jpg';
import s from './Users.module.scss';
import { NavLink } from 'react-router-dom';


const User = ( { followingProgress, follow, unfollow, user } ) => {

    return (
        <li key={ user.id } className={ s.user }>
            <div className={ s.controls }>
                <div className={ s.logo }>
                    <NavLink to={ `/profile/${user.id}` }>
                        <img src={ user.photos.small !== null ? user.photos.small : defaultUserLogo } alt=''/>
                    </NavLink>
                </div>
                <div className={ s.btn }>
                    { user.followed
                        ?
                        <button disabled={ followingProgress.some( id => id === user.id ) }
                                className={ s.unfollow }
                                onClick={ () => { unfollow( user.id );} }>Unfollow</button>
                        :
                        <button disabled={ followingProgress.some( id => id === user.id ) }
                                className={ s.follow }
                                onClick={ () => {follow( user.id );} }>Follow</button>
                    }
                </div>
            </div>
            <div className={ s.info }>
                <div className={ s.name }>
                    <span>{ user.name }</span>
                    <span>{ user.status }</span>
                </div>
                <div className={ s.location }>
                    <span>{ 'user.location.city' }</span>
                    <span>{ 'user.location.country' }</span>
                </div>
            </div>
        </li>

    );
};

export default User;