import React from 'react'
import '../styles/Post.css'

function Post(props) {
//   console.log(props)
  return (
    <div className='post'>
      <div>
        <img src={props.src}/>
        <li>
          {props.article}
        </li>
      </div>
      <p>
      좋아요: {props.like}
      <br/>
      댓글 {props.commentCnt}개
      </p>
    </div>
  )
}

export default Post