import {ActionTypes, MessageType, store, StoreType} from "./State";
import React from 'react';

let initialState={
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'What`s going on?'},
            {id: 3, message: 'How`re you things'},
            {id: 4, message: 'How`s life?'},
            {id: 5, message: 'I got it!'},
            {id: 6, message: 'Catch you around!'},
        ],
        newMessage:''
}


export const messageReducer = (state=initialState,action:ActionTypes) => {
    switch (action.type){
        case "ADD-NEW-MESSAGE":
            let newPost: MessageType = {
                id: new Date().getTime(),
                message: action.newMessage
            }
          state.messageData.push(newPost)
            state.newMessage = ''
            return state
        case "NEW-MESSAGE" :
           state.newMessage = action.postText
            return state
        default:
            return state
    }
}