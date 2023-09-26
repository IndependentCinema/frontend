import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import RootReducer from './reducers/RootReducer'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = configureStore({
    reducer: persistedReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    // middleware: [thunk]
    middleware: []
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
let persistor = persistStore(store)

// Exports
export { store, persistor };