import React from "react"
import s from "./Post.module.css"

const Post = ({message, likeCount}) => {
  return (
  <div className={s.item}>
    <img src="https://im0-tub-ru.yandex.net/i?id=05dede2ecfae3b4e2f479ad02652eb31&n=13" alt=""/>
    <span>{message}</span>
    <div>
  <span>Like: {likeCount}</span>
    </div>
  </div>)
}

export default Post