import React from "react"
import { NavLink } from "react-router-dom"
import s from "./DialogsItem.module.css"

const DialogsItem = ({userId, userName}) => {
  return (
    <NavLink to={`/dialogs/${userId}`} className={s.dialog} activeClassName={s.active}>
      <div>{userName}</div>
    </NavLink>
  )
}

export default DialogsItem