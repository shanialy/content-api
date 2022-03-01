import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducers from "./rootReducers"
// import {api} from "../components/Test/Api"

const isDev = process.env.NODE_ENV === "development";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["darkmode"],
  };

const rootReducer = combineReducers(rootReducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewareLogger = !!isDev ? logger : [];

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(middlewareLogger),

        // reducer:{
        // [api.reducerPath]:api.reducer},
    
});

export let persistor = persistStore(store);

export const  RootState = store.getState;
export  const AppDispatch =  store.dispatch;
