import { all } from 'redux-saga/effects'
import users from './users'
export default function* rootSage() {
    yield all([users()])
}