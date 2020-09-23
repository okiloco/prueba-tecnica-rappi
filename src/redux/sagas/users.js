import { put, call, takeLatest } from 'redux-saga/effects';
import { START_GET_USERS, SUCCESS_GET_USERS, GET_CURRENT_USER, SET_CURRENT_USER } from '../../constants'
import { get_users, authentication, reAuthenticate } from '../../services'
function* getUsers({ payload }) {
    try {
        /* yield authentication({
            email: "okiloco2@gmail.com",
            password: "123"
        })
        const { data } = yield get_users()
        yield put({ type: SUCCESS_GET_USERS, data }); */
        /* reAuthenticate()
            .then(response => {
               
            })
            .catch(err => {
                console.log("ERROR", err)
            }); */
    } catch (err) {
        console.log(err)
    }
}

function* currentUser({ payload }) {
    try {
        /* const { user } = yield reAuthenticate();
        yield put({ type: SET_CURRENT_USER, user })
        console.log("CurrentUser: ", user) */
    } catch (error) {

    }
}
//Watchers
export default function* users() {
    yield takeLatest(START_GET_USERS, getUsers);
    yield takeLatest(GET_CURRENT_USER, currentUser);
}