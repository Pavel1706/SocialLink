import React from 'react';
import {MessageItem} from "./Message/MessageItem";
import {ActionTypes} from "../../Redux/State";
import {StateType} from "../../Redux/reduxStore";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionTypes)=> void
    newMessage:string

}

export const Conversation = (props:AppPropsType) => {
        return (
        <MessageItem state={props.state}  dispatch={props.dispatch} newMessage={props.newMessage} />
    )
}
