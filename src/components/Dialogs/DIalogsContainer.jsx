import React from "react"
import { connect } from "react-redux"
import { addMessageCreator, inputTextMessageCreator } from "../redux/dialogsPageReducers"
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newTextMessage: state.dialogsPage.textMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageCreator())
    },

    inputTextNewMessage: (text) => {
      dispatch(inputTextMessageCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer