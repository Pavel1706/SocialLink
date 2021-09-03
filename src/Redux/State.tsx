import React from "react";
import { rerenderEntireTree} from "../index";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";


export type DreamTextType = {
    posts: Array<DreamType>
    newPostText: string|''

}

export type DreamType = {
    id: number
    message: string
    like: number
}

export type ConversationType = {
    id: number
    name: string
    foto: string
}
export type ConversationArrayType = {
    dialogs: Array<ConversationType>
}

export type MessageArrayType = {
    messageData: Array<MessageType>
    newMessage:string
}

export type MessageType = {
    id: number
    message: string

}
//
// export type mainStateType ={
//     newState: StateType
// }
export type StateType = {
    profilePage: DreamTextType
    dialogsPage: ConversationArrayType
    messagePage: MessageArrayType


}


export type StoreType = {
    _state: StateType
    // changeNewTextCallback: (newText: string) => void
    // addPost: (postText:string)=> void
    // addPostMessage:(postText:string)=> void
    _onChange: ()=> void
    subscribe:(callback: ()=> void)=> void
    getState:()=> StateType
    dispatch: (action: ActionTypes)=> void
}
// type AddPostActionType ={
//     type: 'ADD-POST'
//     postText: string
// }

export type ActionTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC >
     | ReturnType<typeof NewMessageAC>
     | ReturnType<typeof addNewMessageAC>

export const NewMessageAC = (newMessage:string)=>{
    return {
        type: 'NEW-MESSAGE',
        postText: newMessage
    } as const
}
export const addNewMessageAC = (newMessage:string)=>{
    return {
        type: 'ADD-NEW-MESSAGE',
        newMessage: newMessage
    } as const
}


export const addPostAC = (postText:string)=> {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const changeNewTextAC = (newText:string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export const store: StoreType ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello! How`s life?', like: 22},
                {id: 2, message: 'Hey hey! How`re you things?', like: 15},
                {id: 3, message: 'Hey buddy! How`re you?', like: 35},
                {id: 4, message: 'Hey there! Take it easy?', like: 77},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pavel', foto: 'https://bipbap.ru/wp-content/uploads/2016/03/1529534028_ekau52fsukj.jpg'},
                {id: 2, name: 'Alex', foto: 'https://cdn1.flamp.ru/4f8b0149fac1b70943a874c608108a12.jpeg'},
                {id: 3, name: 'Dasha', foto: 'https://avatarko.ru/img/kartinka/10/zhivotnye_enot_yazyk_9275.jpg'},
                {id: 4, name: 'Yulia', foto: 'https://kot-pes.com/wp-content/uploads/2019/10/post_5da84ea695ff8.jpeg'},
                {id: 5, name: 'Roman', foto: 'https://avatars.mds.yandex.net/get-zen_doc/1925930/pub_5cee22a63f1e7700b0ea7316_5cee24751cd66200af7a3252/scale_1200'
                },
                {id: 6, name: 'Irina', foto: 'https://funik.ru/wp-content/uploads/2018/11/f3965b72a5e12aa933a0.jpg'}
            ]
        },
        messagePage: {
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What`s going on?'},
                {id: 3, message: 'How`re you things'},
                {id: 4, message: 'How`s life?'},
                {id: 5, message: 'I got it!'},
                {id: 6, message: 'Catch you around!'},
            ],
            newMessage:''
        }

    },
    _onChange(){

    },
    subscribe(callback){
        this._onChange=callback
    },
    getState(){
        return this._state;
    },
    // changeNewTextCallback(newText:string){
    //     this._state.profilePage.newPostText = newText
    //     this._onChange(this._state)
    // },
    // addPost(postText:string){
    //     let newPost: DreamType = {
    //         id: new Date().getTime(),
    //         message: postText,
    //         like: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText=''
    //     this._onChange(this._state);
    // },
    // addPostMessage(postText:string){
    //     let newPost: MessageType = {
    //         id: new Date().getTime(),
    //         message: postText
    //     }
    //     this._state.messagePage.messageData.push(newPost)
    //     this._onChange(this._state);
    // },
    dispatch(action){

         profileReducer(store._state.profilePage, action)
         messageReducer(store._state.messagePage, action)
        this._onChange()
            // if(action.type=== 'ADD-POST'){
            //     let newPost: DreamType = {
            //         id: new Date().getTime(),
            //         message: action.postText,
            //         like: 0
            //     }
            //     this._state.profilePage.posts.push(newPost)
            //     this._state.profilePage.newPostText=''
            //     this._onChange(this._state);
            // } else if (action.type ==='CHANGE-NEW-TEXT'){
            //     this._state.profilePage.newPostText = action.newText
            //     this._onChange(this._state)
            // }
            // else if(action.type === 'ADD-NEW-MESSAGE'){
            //     let newPost: MessageType = {
            //         id: new Date().getTime(),
            //         message: action.newMessage
            //     }
            //     this._state.messagePage.messageData.push(newPost)
            //     this._state.messagePage.newMessage=''
            //     this._onChange(this._state)
            // }else if (action.type === 'NEW-MESSAGE'){
            //     this._state.messagePage.newMessage=action.postText
            //     this._onChange(this._state)
            // }
            }

}





