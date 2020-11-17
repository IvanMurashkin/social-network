import React from "react"
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import s from "./Profile.module.css"

const Profile = ({ state, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <Posts posts={state.posts} dispatch={dispatch} textNewPost={state.textPost}/>
    </div>
  )
}

export default Profile