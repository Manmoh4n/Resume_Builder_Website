import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, authActions } from './auth.action';

export function* postLogin(action) {
    const body = action.payload;
    try {
        const response = yield call(axios.post, '/api/auth/login', body);
        if (response.status === 200) {
            yield put(authActions.postLoginSuccess(response.data));
            action.onSuccess(response.data);
        } else {
            action.onError(response.data);
        }
    } catch (error) {
        console.error('Login Saga Error:', error);
        action.onError(error.response.data);
    }
}

export function* postLogout(action) {
    try {
        const response = yield call(axios.post, "/api/auth/logout");
        if (response.status === 200) {
            yield put(authActions.postLogoutSuccess());
            action.onSuccess(response.data);
        }
    } catch (error) {
        console.error("Logout Error:", error);
    }
}

// Watcher saga
export function* saga() {
    yield takeLatest(actionTypes.PostLogin, postLogin);
    yield takeLatest(actionTypes.PostLogout, postLogout);
}