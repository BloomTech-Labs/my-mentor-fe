import {
} from "../actions";

const initialState = {
    email: "",
    isAuthenticating: false,
    loggedIn: false,
    authenticationError: "",
}

export const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case START_MENTOR_LOGIN:
            return {
                ...state,
                isAuthenticating: true
            }
        case LOGIN_MENTOR_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                loggedIn: true,
                email: email.email
            }
        case LOGIN_MENTOR_FAILURE:
            return {
                ...state,
                authenticationError: action.payload,
                isAuthenticating:false
            }
        
        default:
            return {
                ...state
        }
    }
};
