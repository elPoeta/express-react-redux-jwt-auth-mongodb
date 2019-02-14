import { AUTH_USER, AUTH_ERROR, SECRET } from '../actions/types';

const initialState = {
    authenticated: '',
    secret: '',
    errorMessage: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.payload
            }
        case AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case SECRET:
            return {
                ...state,
                secret: action.payload
            }
        default: return state;
    }
}
