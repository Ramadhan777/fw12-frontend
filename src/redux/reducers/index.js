import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import transaction from './transaction'
import resetPassword from './resetPassword'

const authConfig = {
    key: 'auth',
    storage
}

const resetPasswordConfig = {
    key: 'resetPassword',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    transaction,
    resetPassword: persistReducer(resetPasswordConfig, resetPassword),
})

export default reducer