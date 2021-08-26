import React, { useState } from 'react';
import p from '../Conversation.module.css'
import {BrowserRouter, NavLink} from "react-router-dom"
import {ConversationItem} from "../ConversationItem/ConversationItem";
import {Message} from "../Message";
import {StateType} from "../../../Redux/State";

type AppPropsType = {
    state: StateType
    addNewPosts: (text:string)=> void
}



export const MessageItem = (props:AppPropsType) => {

    let conversationElements = props.state.dialogsPage.dialogs
        .map(c => <ConversationItem name={c.name} id={c.id} />);

    let messageElement = props.state.messagePage.messageData
        .map(m => <Message message={m.message}/>)

    let newDreamElement = React.createRef<HTMLTextAreaElement>()

    let addPostMessage = ()=>{
        if(newDreamElement.current) {
            props.addNewPosts(newDreamElement.current.value)
            newDreamElement.current.value=''
        }
    }




    return (
        <BrowserRouter>
            <div className={p.text}>
                <div className={p.dialogs}>
                    { conversationElements }
                </div>

                <div className={p.messages}>
                    {messageElement}
                    <div>
                        <textarea ref={newDreamElement}> </textarea>
                        <button onClick={addPostMessage}>add</button>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}