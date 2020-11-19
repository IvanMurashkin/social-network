import React from "react"
import Post from "./Post/Post"
import TextArea from "../../ui/Textarea/TextArea"
import s from "./Posts.module.css"
import { addPostCreator, inputTextPostCreator } from "../../redux/profilePageReducer"

const Posts = ({ posts, dispatch, textNewPost }) => {
    return ( 
    <div>
        <h3>My posts</h3>
        <div> 
        <TextArea 
          dispatch={dispatch} 
          text={textNewPost} 
          actions={{ addActionCreator: addPostCreator, inputActionCreator: inputTextPostCreator }} />
        </div>
        <div>
            {posts.map((post) => <Post message={post.text} likeCount={post.like}/>)}
        </div>
    </div>
)
}

export default Posts