import * as axios from 'axios';


const instance = axios.create( {
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials : true,
    headers : {
        'API-KEY' : '4de4bb6c-4383-4432-b04c-2ab8375569e8'
    }
} );

export const usersAPI = {
    getUsers( currentPage = 1, pageSize = 20 ) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}` ).then( resp => resp.data );
    },

    follow( userId ) {
        return instance.post( `follow/${userId}` );
    },

    unfollow( userId ) {
        return instance.delete( `follow/${userId}` );
    }
};

export const authAPI = {
    authUser() {
        return instance.get( `auth/me` ).then( resp => resp.data );
    },

    login( email, password, rememberMe = false, captcha= false ) {
        return instance.post( `auth/login`, { email, password, rememberMe, captcha } ).then( resp => resp.data );
    },

    logout() {
        return instance.delete( `auth/login` ).then( resp => resp.data );
    },
    captcha() {
        return instance.get( `security/get-captcha-url` ).then( resp => resp.data );
    }
};

export const profileAPI = {
    getUserProfile( userId ) {
        return instance.get( `profile/${userId}` ).then( resp => resp.data );
    },
    getStatus( userId ) {
        return instance.get( `profile/status/${userId}` ).then( resp => resp.data );
    },
    updateStatus( status ) {
        return instance.put( `profile/status`, { status : status } ).then( resp => resp.data );
    }
};