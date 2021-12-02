import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_SUCCESS,
    RESET_PASSWORD_CONFIRM_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    LOGOUT
} from "../actions/types";

const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        
        case AUTHENTICATED_FAIL:
            return{
                ...state,
                isAuthenticated: false
            }
            
        case GOOGLE_AUTH_FAIL:
        case LOGOUT:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                access: null
            }

        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }

        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }

        case GOOGLE_AUTH_SUCCESS:
            localStorage.setItem('access',payload.access)

            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
        case RESET_PASSWORD_SUCCESS:
        case RESET_PASSWORD_FAIL:
        case RESET_PASSWORD_CONFIRM_SUCCESS:
        case RESET_PASSWORD_CONFIRM_FAIL:
            return {
                ...state
            }

        default:
            return state
    }
}