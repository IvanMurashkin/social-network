import React from "react"
import s from "./MessageItem.module.css"

const MessageItem = ({ message }) => {
  return (
    <div className={s.message_item}>
      <img src="https://i-svn.ru/img/2455476200.jpg" />
      <span>{message}</span>
    </div>
  )
}

export default MessageItem