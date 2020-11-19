const ADD_MESSAGE = "ADD_MESSAGE"
const INPUT_MESSAGE_TEXT = "INPUT_MESSAGE_TEXT"

const dialogsPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push(
        {
          id: 5,
          text: state.messageText,
        }
      )
      state.messageText = ''
      return state
    case INPUT_MESSAGE_TEXT:
      state.messageText = action.text
      return state
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