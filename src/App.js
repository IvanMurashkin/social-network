/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"

import {BrowserRouter, Route} from "react-router-dom"

import './App.css';
import DialogsContainer from "./components/Dialogs/DIalogsContainer"
import PostsContainer from "./components/Profile/PostsContainer"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />      
        <div className="content">
          <Navbar state={[]}/>
          <div className="main">
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/music" render={Music}/> 
            <Route path="/news" render={News}/> 
            <Route path="/settings" render={Settings}/> 
            <Route path="/profile" render={() => <PostsContainer />}/>  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
