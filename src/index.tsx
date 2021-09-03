import React from 'react';
import './index.css';
import App from './App';
import {store, StoreType} from "./Redux/reduxStore";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree = (store: StoreType)=> {

    ReactDOM.render(
        <BrowserRouter>
        <App store={store} />,
</BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store)

store.subscribe(()=> {
    rerenderEntireTree(store);
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


