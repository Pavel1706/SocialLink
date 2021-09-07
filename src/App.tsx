import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import { Profile} from "./components/Face/Profile";
import {Conversation} from "./components/Conversation/Conversation";
import {BrowserRouter, Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {store} from "./Redux/State";
import  {StoreType} from "./Redux/reduxStore";



type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()
    return (

            <div className='app-wrapper'>
                <Header/>
                <Nav dialogs={state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content '>
                    <Route path='/Conversation' render={()=><Conversation state={state} dispatch={props.store.dispatch.bind(props.store)}
                                                                          newMessage={state.messagePage.newMessage} />}/>
                    <Route path='/Face' render={()=><Profile posts={state}
                                                             dispatch={props.store.dispatch.bind(props.store)}
                                                          newPostText={state.profilePage.newPostText}
                                                            />}/>

                    <Route path='/news' />
                    <Route path='/music' />
                    <Route path='/settings' /><Route path='/Friends' render={()=> <Friends dialogs={state.dialogsPage.dialogs} />}/>
                </div>
            </div>

    );
}

export default App;
