import React from 'react';
import imagePhoto from "../../../../img/avatar1.jpg"

const Post = (props) => {
  return (
    <li className='collection-item avatar'>
      <img className='circle' src={props.photo !== null ? props.photo : imagePhoto } />
      <span className='title'>{props.message}</span>
      <p>like: {props.likesCount}</p>
    </li>
  )
}

export default Post;