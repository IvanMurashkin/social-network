/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile"; 
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"

import {BrowserRouter, Route} from "react-router-dom"

import './App.css';

function App({ state, dispatch }) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />      
        <div className="content">
          <Navbar state={state.sidebar}/>
          <div className="main">
            <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage} 
                                                          dispatch={dispatch}/>}/>
            <Route path="/music" render={Music}/> 
            <Route path="/news" render={News}/> 
            <Route path="/settings" render={Settings}/> 
            <Route path="/profile" render={() => <Profile state={state.profilePage} 
                                                          dispatch={dispatch}/>}
                                                  />  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
