import {configureStore} from '@reduxjs/toolkit'
import {appReducer} from './app-reducer'
import {getMiddleware} from './middleware'

const appStore = configureStore({
    reducer: appReducer,
    middleware: getMiddleware()
})

const getAppStore = () => appStore

export default getAppStore
