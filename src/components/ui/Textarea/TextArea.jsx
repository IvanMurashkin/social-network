import React from "react"
import s from "./TextArea.module.css"

const TextArea = ({ dispatch, text, actions }) => {

  const clickBtnHandler = () => {
    dispatch(actions.addActionCreator())
  }

  const inputTextHandler = (e) => {
    dispatch(actions.inputActionCreator(e.target.value))
  }

  return (
    <div>
      <textarea onChange={inputTextHandler} value={text} />
      <button onClick={clickBtnHandler}>Add</button>
    </div>
  )
}

export default TextArea