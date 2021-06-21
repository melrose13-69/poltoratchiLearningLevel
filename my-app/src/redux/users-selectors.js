import { createSelector } from 'reselect';

// SS Super Selector
export const getPageSize = state => {
    return state.usersPage.pageSize;
};

export const geTotalUsersCount = state => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = state => {
    return state.usersPage.currentPage;
};

export const getIsFetching = state => {
    return state.usersPage.isFetching;
};

export const getFollowingProgress = state => {
    return state.usersPage.followingProgress;
};

export const getUsersSelector = state => {
    return state.usersPage.users;
};


export const getUsersSS = createSelector(getUsersSelector, (users) => {
    return users.filter( user => true );
} );






