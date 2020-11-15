import React from "react"
import s from "./Friends.module.css"

const Friends = ({ friends }) => {
    return (
      <div className={s.friends}>
        <h3>Friends</h3>
        <div className={s.friend_items}>
          {friends.map(() => <img src="https://i-svn.ru/img/2455476200.jpg"/>)}
        </div>
      </div>
    )
}

export default Friends