import React from "react"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import MessageItem from "./MessageItem/MessageItem"
import TextArea from "../ui/Textarea/TextArea"

const Dialogs = ({ dialogs, messages, textNewMessage, addMessage, inputTextNewMessage }) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {dialogs.map((dialog, index) => <DialogsItem userId={dialog.id} userName={dialog.userName} key={index + dialog.id}/>)}
      </div>
      <div className={s.messages}>
        {messages.map((message, index) => <MessageItem message={message.text} key={index + message.id}/>)}
        <TextArea 
          clickAddBtnHandler={addMessage}
          inputTextHandler={inputTextNewMessage}
          initialValue={textNewMessage} 
        />
      </div>
    </div>
  )
}

export default Dialogs