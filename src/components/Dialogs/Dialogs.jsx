import React from "react"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import MessageItem from "./MessageItem/MessageItem"
import TextArea from "../ui/Textarea/TextArea"

const Dialogs = ({ dialogs, messages, newTextMessage, addMessage, inputTextNewMessage }) => {
  console.log({ dialogs, messages, newTextMessage, addMessage, inputTextNewMessage })
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {dialogs.map((dialog) => <DialogsItem userId={dialog.id} userName={dialog.userName}/>)}
      </div>
      <div className={s.messages}>
        {messages.map((message) => <MessageItem message={message.text} />)}
        <TextArea 
          clickAddBtnHandler={addMessage}
          inputTextHandler={inputTextNewMessage}
          text={newTextMessage} 
        />
      </div>
    </div>
  )
}

export default Dialogs