import { combineReducers, createStore } from "redux"
import dialogsPageReducers from "./dialogsPageReducers"
import profilePageReducer from "./profilePageReducer"
import sidebarReducer from "./sidebarReducer"

const reducers = combineReducers({
  dialogsPage: dialogsPageReducers,
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
})

const store = createStore(reducers)

window.store = store

export default store