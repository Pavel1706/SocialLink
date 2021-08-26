import React from 'react';
import { MyPosts} from "./myDreams/MyPosts";
import {ProfileInfo} from "./FaceInfo/ProfileInfo";
import { StateType} from "../../Redux/State";

type AppPropsType = {
    posts: StateType
    newPostText:string
    addPost: (text:string)=> void
    changeNewTextCallback: (newText:string)=> void
}


export const Profile = (props:AppPropsType) => {

    return (
        <div>
            <ProfileInfo message={'Hello there buddy'}/>
            <MyPosts posts={props.posts}
                      addNewdream={props.addPost}
                      newPostText={props.posts.profilePage.newPostText}
                      changeNewTextCallback={props.changeNewTextCallback}
            />
        </div>
    )
}