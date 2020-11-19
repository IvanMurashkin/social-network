import React from "react"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import MessageItem from "./MessageItem/MessageItem"
import TextArea from "../ui/Textarea/TextArea"
import { addMessageCreator, inputTextMessageCreator } from "../redux/dialogsPageReducers"

const Dialogs = ({ state, dispatch }) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {state.dialogs.map((dialog) => <DialogsItem userId={dialog.id} userName={dialog.userName}/>)}
      </div>
      <div className={s.messages}>
        {state.messages.map((message) => <MessageItem message={message.text} />)}
        <TextArea 
          dispatch={dispatch} 
          text={state.messageText} 
          actions={{ addActionCreator: addMessageCreator, inputActionCreator: inputTextMessageCreator }}/>
      </div>
    </div>
  )
}

export default Dialogs