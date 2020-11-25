const ADD_MESSAGE = "ADD_MESSAGE"
const INPUT_MESSAGE_TEXT = "INPUT_MESSAGE_TEXT"

const initialState = {
    dialogs: [
      {id: 1, userName: "Vasya"},
      {id: 2, userName: "Anna"},
    ],
    messages: [
      {id: 1, text: "Ljdso msh j hbasdjf"},
      {id: 2, text: "Yur jsls lsaldvfnj"},
    ],
    textNewMessage: '',
}

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, text: state.textNewMessage, }],
        textNewMessage: '',
      }
    case INPUT_MESSAGE_TEXT:
      return {
        ...state,
        textNewMessage: action.text
      }
    default:
      return state
  }
}

export default dialogsPageReducer

export const addMessageCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const inputTextMessageCreator = (text) => {
  return {
    type: INPUT_MESSAGE_TEXT,
    text,
  }
} 