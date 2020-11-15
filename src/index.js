import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import state, { subscribe }from "./components/redux/state"

const renderTemplate = (state, actions) => {
  ReactDOM.render(<App state={state} actions={actions}/>, document.querySelector('#root'))
}

subscribe(renderTemplate)
