import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import { Post} from "./dream/Post";
import { StateType} from "../../../Redux/State"

type AppPropsType = {
    posts: StateType
    newPostText: string
    addNewdream: (post: string) => void
    changeNewTextCallback:(newText:string)=> void
}

export const MyPosts = (props:AppPropsType) => {

    let newText = props.posts.profilePage.posts.map(d => <Post message={d.message} like={d.like}/>)
    // let newDreamElement = React.createRef<HTMLTextAreaElement>()
    let addDream = () => {
        props.addNewdream(props.newPostText)


    }
    const ChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {

            props.changeNewTextCallback(e.currentTarget.value)
        }


        return (
            <div className={p.since}>
                <h3> My dreams </h3>
                {props.posts.profilePage.posts.map(t => <div key={t.id}><b>{t.message}</b></div>)}
                <div>
                <textarea value={props.newPostText}
                          onChange={ChangeTextArea}/>

                    <button onClick={addDream}>Add dream</button>
                    <div>{newText}</div>
                </div>

                <div className={p.dreams}>

                </div>
            </div>

        )

}