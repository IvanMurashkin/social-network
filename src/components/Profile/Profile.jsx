import React from "react"
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import s from "./Profile.module.css"

const Profile = ({ state, addPost, inputText }) => {
  return (
    <div>
      <ProfileInfo />
      <Posts posts={state.posts} addPost={addPost} inputText={inputText} text={state.textAreaContent}/>
    </div>
  )
}

export default Profile