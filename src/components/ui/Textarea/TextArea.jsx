import React from "react"
import s from "./TextArea.module.css"

const TextArea = ({ dispatch, text, actions }) => {
  const textAreaRef = React.createRef()

  const clickBtnHandler = () => {
    dispatch({ type: actions.addAction })
  }

  const inputTextHandler = () => {
    dispatch({ 
      type: actions.inputAction, 
      text: textAreaRef.current.value 
    })
  }

  return (
    <div>
      <textarea ref={textAreaRef} onChange={inputTextHandler} value={text} />
      <button onClick={clickBtnHandler}>Add</button>
    </div>
  )
}

export default TextArea