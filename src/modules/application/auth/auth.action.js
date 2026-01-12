export const actionTypes = {
    PostLogin: '[Auth] Post Login Action',
    PostLoginSuccess: '[Auth] Login Success Action',
    PostLogout: "[Auth] Logout Action",
    PostLogoutSuccess: "[Auth] Logout Success Action",
};

export const authActions = {
    postLogin: (payload, onSuccess, onError) => ({ type: actionTypes.PostLogin, payload, onSuccess, onError }),
    postLoginSuccess: (payload) => ({ type: actionTypes.PostLoginSuccess, payload }),
    postLogout: (onSuccess, onError) => ({ type: actionTypes.PostLogout, onSuccess, onError }),
    postLogoutSuccess: () => ({ type: actionTypes.PostLogoutSuccess }),
};
