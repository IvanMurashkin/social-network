import dialogsPageReducer from "./dialogsPageReducers"
import profilePageReducer from "./profilePageReducer"

const store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {id: 1, userName: "Vasya"},
        {id: 2, userName: "Anna"},
      ],
      messages: [
        {id: 1, text: "Ljdso msh j hbasdjf"},
        {id: 2, text: "Yur jsls lsaldvfnj"},
      ],
      messageText: '',
    },
    profilePage:{  
      posts: [
        {id: 1, text: "Hkjfv kdsjfnsd;k;dknf", like: 5},
        {id: 2, text: "Rfgdf", like: 2},
      ],
      textPost: '',
    },
    sidebar: {
      friends: [
        {id:1},
        {id:2},
      ],
    },
  },

  _callSubscription() {},

  dispatch(action) {
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
    this._state.profilePage = profilePageReducer(this._state.profilePage, action)

    this._callSubscription()
  },

  subscribe(observer) {
    this._callSubscription = observer
  },

  getState() {
    return this._state
  },
}

export default store