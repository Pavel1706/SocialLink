import React from 'react';
import p from "./../Conversation.module.css";
import {NavLink} from "react-router-dom";


type ConversationItemType = {
    name: string
    id: number
}

export const ConversationItem = (props: ConversationItemType) => {
    let path = `${props.name}` + props.id;
    return    (
        <div className={p.dialog + ' ' + p.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


