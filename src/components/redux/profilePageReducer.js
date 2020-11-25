const ADD_POST = "ADD_POST"
const INPUT_POST_TEXT = "INPUT_POST_TEXT"

const initialState = {
  posts: [
    {id: 1, text: "Hkjfv kdsjfnsd;k;dknf", like: 5},
    {id: 2, text: "Rfgdf", like: 2},
  ],
  textNewPost: '',
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, text: state.textNewPost, }],
        textNewPost: '',
      }
    case INPUT_POST_TEXT:
      return {
        ...state,
        textNewPost: action.text
      }
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