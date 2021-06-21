import React from 'react';
import s from './Users.module.scss';
import Pagination from '../common/Pagination/Pagination';
import User from './User';


const Users = ( props ) => {
    return (
        <div>
            <Pagination currentPage={ props.currentPage }
                        totalCount={ props.totalUsersCount }
                        pageSize={ props.pageSize }
                        onPageChanged={ props.onPageChanged }/>
            <ul className={ s.userlist }>
                { props.users.map( u =>
                    <User followingProgress={ props.followingProgress }
                          follow={ props.follow }
                          unfollow={ props.unfollow }
                          user={ u }/>
                ) }
            </ul>
        </div>
    );
};

export default Users;