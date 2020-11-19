const ADD_POST = "ADD_POST"
const INPUT_POST_TEXT = "INPUT_POST_TEXT"

const profilePageReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push(
        {
          id: 5,
          text: state.textPost,
          like: 0
        }
      )
      state.textPost = ''
      return state
    case INPUT_POST_TEXT:
      state.textPost = action.text
      return state
    default:
      return state
  }
}

export default profilePageReducer

export const addPostCreator = () => {
  return {
    type: ADD_POST
  }
}

export const inputTextPostCreator = (text) => {
  return {
    type: INPUT_POST_TEXT,
    text,
  }
} 