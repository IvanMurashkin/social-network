import React from "react"

const TextArea = ({ clickAddBtnHandler,  inputTextHandler, initialValue}) => {

  const clickBtnHandler = () => {
    clickAddBtnHandler()
  }

  const changeTextHandler = (e) => {
    inputTextHandler(e.target.value)
  }

  return (
    <div>
      <textarea onChange={changeTextHandler} value={initialValue} />
      <button onClick={clickBtnHandler}>Add</button>
    </div>
  )
}

export default TextArea