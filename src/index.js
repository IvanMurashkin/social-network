import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./components/redux/redux-store"

const renderTemplate = () => {
  ReactDOM.render(
    <App state={store.getState()} 
         dispatch={store.dispatch.bind(store)}
    />, 
  document.querySelector('#root'))
}

renderTemplate()

store.subscribe(renderTemplate)
