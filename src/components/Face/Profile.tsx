import React from 'react';
import { MyPosts} from "./myDreams/MyPosts";
import {ProfileInfo} from "./FaceInfo/ProfileInfo";
import {ActionTypes, StateType} from "../../Redux/State";
import {MyPostsContainer} from "./myDreams/MyPostsContainer";

type AppPropsType = {
    posts: StateType
    newPostText:string
    dispatch: (action: ActionTypes)=> void
}


export const Profile = (props:AppPropsType) => {



    return (
        <div>
            <ProfileInfo message={'Hello there buddy'}/>
            <MyPostsContainer posts={props.posts}
                      newPostText={props.posts.profilePage.newPostText}
                     dispatch={ props.dispatch}
                     // updateNewText={()=>{}}
            />
        </div>
    )
}