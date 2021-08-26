import React from 'react';
import {MessageItem} from "./Message/MessageItem";
import {StateType} from "../../Redux/State";

type AppPropsType = {
    state: StateType
    addNewPosts: (text:string)=> void

}

export const Conversation = (props:AppPropsType) => {
        return (
        <MessageItem state={props.state} addNewPosts={props.addNewPosts} />
    )
}