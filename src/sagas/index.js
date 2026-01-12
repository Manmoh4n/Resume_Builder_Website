import { all } from 'redux-saga/effects';
import * as auth from '../modules/application/auth/auth.saga';

export default function* rootSaga() {
    yield all([
        auth.saga(),
    ]);
}
