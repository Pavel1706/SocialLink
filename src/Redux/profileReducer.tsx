import React from 'react';
import {ActionTypes, DreamType, StoreType} from "./State";

let initialState={
        posts: [
            {id: 1, message: 'Hello! How`s life?', like: 22},
            {id: 2, message: 'Hey hey! How`re you things?', like: 15},
            {id: 3, message: 'Hey buddy! How`re you?', like: 35},
            {id: 4, message: 'Hey there! Take it easy?', like: 77},
        ],
        newPostText: ''
}

export const profileReducer = (_state=initialState,action:ActionTypes) => {

    switch(action.type){
        case 'ADD-POST':
            let newPost: DreamType = {
                id: new Date().getTime(),
                message: action.postText,
                like: 0
            }
           _state.posts.push(newPost)
            _state.newPostText='';
            return _state
        case 'CHANGE-NEW-TEXT':
            _state.newPostText = action.newText
            return _state;
        default:
            return _state
    }
}

