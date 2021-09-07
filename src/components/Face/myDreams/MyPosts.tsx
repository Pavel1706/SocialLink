import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import { Post} from "./dream/Post";
import {ActionTypes, addPostAC, changeNewTextAC, StateType} from "../../../Redux/State"

type AppPropsType = {
    posts: StateType
    newPostText: string
    // dispatch: (action: ActionTypes)=> void
    updateNewText:(text:string)=> void
    addPost:()=> void
}

export const MyPosts = (props:AppPropsType) => {

    let newText = props.posts.profilePage.posts.map(d => <Post message={d.message} like={d.like}/>)
    let newDreamElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        props.addPost()
        // props.dispatch({type:'ADD-POST', postText:props.newPostText})
        // props.dispatch(addPostAC(props.newPostText))
    }
    const newChangeTextArea = (e:ChangeEvent<HTMLTextAreaElement>) => {


            let text = e.currentTarget.value
        console.log(text)
            props.updateNewText(text)
            // props.updateNewText(e.currentTarget.value)

            // props.dispatch({type:"CHANGE-NEW-TEXT", newText: e.currentTarget.value})

        }


        return (
            <div className={p.since}>
                <h3> My posts </h3>
                {props.posts.profilePage.posts.map(t => <div key={t.id}><b>{t.message}</b></div>)}
                <div>
                <textarea value={props.newPostText}
                          onChange={newChangeTextArea}/>

                    <button onClick={onAddPost}>Add post</button>
                    <div>{newText}</div>
                </div>

                <div className={p.dreams}>

                </div>
            </div>

        )

}