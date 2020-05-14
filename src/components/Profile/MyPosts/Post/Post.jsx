import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src={props.photo} />
        {props.message}
      <div className={s.item_like}>
      <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;