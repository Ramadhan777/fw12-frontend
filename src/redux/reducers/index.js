import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import transaction from './transaction'
import resetPassword from './resetPassword'
import profile from './profile'

const authConfig = {
    key: 'auth',
    storage
}

const resetPasswordConfig = {
    key: 'resetPassword',
    storage
}

const transactionConfig = {
    key: 'transaction',
    storage
}

const profileConfig = {
    key: 'profile',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    transaction: persistReducer(transactionConfig, transaction),
    resetPassword: persistReducer(resetPasswordConfig, resetPassword),
    profile: persistReducer(profileConfig, profile),
})

export default reducer