import React from "react"
import Post from "./Post/Post"
import TextArea from "../../ui/Textarea/TextArea"
import s from "./Posts.module.css"
import { addPostCreator, inputTextPostCreator } from "../../redux/profilePageReducer"

const Posts = ({ addPost, inputTextNewPost, textNewPost, posts }) => {
    return ( 
    <div>
        <h3>My posts</h3>
        <div> 
        <TextArea 
          inputTextHandler={inputTextNewPost} 
          text={textNewPost} 
          clickAddBtnHandler={addPost} />
        </div>
        <div>
            {posts.map((post) => <Post message={post.text} likeCount={post.like}/>)}
        </div>
    </div>
)
}

export default Posts