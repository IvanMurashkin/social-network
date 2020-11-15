let renderTemplate = ({state, actions}) => {} 

const state = {
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
    textAreaContent: '',
  },
  sidebar: {
    friends: [
      {id:1},
      {id:2},
    ],
  },
}

const inputText = (text) => {
  state.profilePage.textAreaContent = text
  
  renderTemplate({ state, actions })
}

const inputMessageText = (text) => {
  state.dialogsPage.messageText = text
  
  renderTemplate({ state, actions })
}

const addPost = () => {
  state.profilePage.posts.push(
    {
      id: 5,
      text: state.profilePage.textAreaContent,
      like: 0
    }
  )
  state.profilePage.textAreaContent = ''
  renderTemplate({ state, actions })
}

const addMessage = () => {
  state.dialogsPage.messages.push(
    {
      id: 5,
      text: state.dialogsPage.messageText,
    }
  )
  state.dialogsPage.messageText = ''
  renderTemplate({ state, actions })
}

export const actions= {
  inputText,
  inputMessageText,
  addPost,    
  addMessage,
}

export const subscribe = (observer) => {
  renderTemplate = observer
}

export default state