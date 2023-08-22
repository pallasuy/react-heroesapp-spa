import { types } from "../types/types";


const initialState = {
    logged: false,

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
            break;
        case types.logout: state
            return {
                ...state,
                logged: false,
            }
        default:
            return state;
            break;

    }

}