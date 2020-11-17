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

  _inputPostText(text){
    this._state.profilePage.textPost = text
    
    this._callSubscription()
  },

  _inputMessageText(text) {
    this._state.dialogsPage.messageText = text
    
    this._callSubscription()
  },

  _addPost() {
    this._state.profilePage.posts.push(
      {
        id: 5,
        text: this._state.profilePage.textPost,
        like: 0
      }
    )
    this._state.profilePage.textPost = ''
    this._callSubscription()
  },

  _addMessage() {
    this._state.dialogsPage.messages.push(
      {
        id: 5,
        text: this._state.dialogsPage.messageText,
      }
    )
    this._state.dialogsPage.messageText = ''
    this._callSubscription()
  },

  dispatch(action) {
    switch(action.type) {
      case "ADD_POST": 
        this._addPost()
        break
      case "ADD_MESSAGE":
        this._addMessage()
        break
      case "INPUT_POST_TEXT": 
        this._inputPostText(action.text)
        break
      case "INPUT_MESSAGE_TEXT":
        this._inputMessageText(action.text)
        break
      default: 
        console.error("Нет такого действия")
    }
  },

  subscribe(observer) {
    this._callSubscription = observer
  },

  getState() {
    return this._state
  },
}

export default store