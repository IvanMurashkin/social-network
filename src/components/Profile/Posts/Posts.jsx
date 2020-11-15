import React from "react"
import Post from "./Post/Post"
import TextArea from "../../ui/Textarea/TextArea"
import s from "./Posts.module.css"

const Posts = ({ posts, addPost, inputText, text }) => {
    return ( 
    <div>
        <h3>My posts</h3>
        <div> 
            <TextArea addInputData={addPost} inputText={inputText} text={text} />
        </div>
        <div>
            {posts.map((post) => <Post message={post.text} likeCount={post.like}/>)}
        </div>
    </div>
)
}

export default Posts