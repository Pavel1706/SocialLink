import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {dialogsReducer} from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(reducers)
export type StoreType = typeof store;
export type StateType = ReturnType<typeof store.getState>;