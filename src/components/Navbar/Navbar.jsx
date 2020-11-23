import React from "react"
import { NavLink } from "react-router-dom"
import Friends from "./Friends/Friends"
import s from "./Navbar.module.css"

const Navbar = ({ state }) => {
    debugger
    return (<div className={s.sidebar}>
          <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
          </div>
          <Friends friends={state.friends}/>
        </div>)
}

export default Navbar