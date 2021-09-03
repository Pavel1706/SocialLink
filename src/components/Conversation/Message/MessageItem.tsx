import React, {ChangeEvent, RefObject, useState} from 'react';
import p from '../Conversation.module.css'
import {ConversationItem} from "../ConversationItem/ConversationItem";
import {Message} from "../Message";
import {ActionTypes, addNewMessageAC, NewMessageAC} from "../../../Redux/State";
import { StateType } from "../../../Redux/reduxStore";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionTypes)=> void
    newMessage:string
}

export const MessageItem = (props:AppPropsType) => {

    let conversationElements = props.state.dialogsPage.dialogs
        .map(c => <ConversationItem name={c.name} id={c.id} />);

    let messageElement = props.state.messagePage.messageData
        .map(m => <Message message={m.message}/>)
    let newTextElement = (e:ChangeEvent<HTMLTextAreaElement>)=> {
            props.dispatch(NewMessageAC((e.currentTarget.value)))
    }
const addNewPost = ()=> {
        props.dispatch(addNewMessageAC(props.newMessage))
}
    return (

            <div className={p.text}>
                <div className={p.dialogs}>
                    { conversationElements }
                </div>

                <div className={p.messages}>
                    {messageElement}
                    <div>
                        <textarea value={props.newMessage} onChange={newTextElement}> </textarea>
                        <button onClick={addNewPost}>add</button>
                    </div>
                </div>
            </div>

    )
}