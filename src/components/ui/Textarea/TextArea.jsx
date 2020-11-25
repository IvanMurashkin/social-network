import React from "react"
import s from "./TextArea.module.css"

const TextArea = ({ clickAddBtnHandler,  inputTextHandler, text}) => {

  const clickBtnHandler = () => {
    clickAddBtnHandler()
  }

  const changeTextHandler = (e) => {
    inputTextHandler(e.target.value)
  }

  return (
    <div>
      <textarea onChange={changeTextHandler} value={text} />
      <button onClick={clickBtnHandler}>Add</button>
    </div>
  )
}

export default TextArea