import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import { Profile} from "./components/Face/Profile";
import {Conversation} from "./components/Conversation/Conversation";
import {BrowserRouter, Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {StoreType} from "./Redux/State";


type PropsType = {
    store: StoreType
}

const App = (props: PropsType) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav dialogs={state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content '>
                    <Route path='/Conversation' render={()=><Conversation state={state} addNewPosts={props.store.addPostMessage.bind(props.store)} />}/>
                    <Route path='/Face' render={()=><Profile posts={state} addPost={props.store.addPost.bind(props.store)}
                                                          newPostText={state.profilePage.newPostText}
                                                          changeNewTextCallback={props.store.changeNewTextCallback.bind(props.store)}
                                                            />}/>
                    <Route path='/news' />
                    <Route path='/music' />
                    <Route path='/settings' />
                    <Route path='/Friends' render={()=> <Friends dialogs={state.dialogsPage.dialogs} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
