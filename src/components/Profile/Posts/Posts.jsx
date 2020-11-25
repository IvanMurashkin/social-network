import React from "react"
import Post from "./Post/Post"
import TextArea from "../../ui/Textarea/TextArea"

const Posts = ({ addPost, inputTextNewPost, textNewPost, posts }) => {
    return ( 
    <div>
        <h3>My posts</h3>
        <div> 
        <TextArea 
          inputTextHandler={inputTextNewPost} 
          initialValue={textNewPost} 
          clickAddBtnHandler={addPost} />
        </div>
        <div>
            {posts.map((post, index) => <Post message={post.text} likeCount={post.like} key={post.id + index}/>)}
        </div>
    </div>
)
}

export default Posts