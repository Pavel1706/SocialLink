import React, {ChangeEvent} from 'react';
import { Post} from "./dream/Post";
import {ActionTypes, addPostAC, changeNewTextAC, StateType} from "../../../Redux/State"
import {MyPosts} from "./MyPosts";

type AppPropsType = {
    posts: StateType
    newPostText: string
    dispatch: (action: ActionTypes)=> void
}

export const MyPostsContainer = (props:AppPropsType) => {
    // let newDreamElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        // props.dispatch({type:'ADD-POST', postText:props.newPostText})
        props.dispatch(addPostAC(props.newPostText))
    }
    const ChangeTextArea = (text:string) => {
        // let newText=e.currentTarget.value
        props.dispatch({type:"CHANGE-NEW-TEXT", newText: text})
        // props.dispatch(changeNewTextAC(newText))
    }

    // return(<MyPosts updateNewText={ChangeTextArea} addPost={addPost}/>)
}