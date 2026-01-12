import { actionTypes } from './auth.action';

const initialState = {
    user: undefined,
    authToken: undefined,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.PostLoginSuccess:
            if (action.payload && action.payload?.success === true) {
                return { ...state, user: action.payload?.data, authToken: action.payload?.data?.accessToken };
            } else {
                return { ...state, user: null, authToken: null };
            }
        
        case actionTypes.PostLogoutSuccess:
            return { ...state, user: null, authToken: null };
        default:
            return state;
    }
}
