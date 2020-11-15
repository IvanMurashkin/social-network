import React from "react"
import s from "./TextArea.module.css"

const TextArea = ({ addInputData, inputText, text }) => {
  const textAreaRef = React.createRef()

  const clickBtnHandler = () => {
    addInputData()
  }

  const inputTextHandler = () => {
    inputText(textAreaRef.current.value)
  }

  return (
    <div>
      <textarea ref={textAreaRef} onChange={inputTextHandler} value={text} />
      <button onClick={clickBtnHandler}>Add</button>
    </div>
  )
}

export default TextArea