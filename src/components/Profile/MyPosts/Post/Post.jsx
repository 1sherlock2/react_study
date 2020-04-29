import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://im0-tub-ru.yandex.net/i?id=0d48a1eb49e4480ac0f5d13aee63d26e&n=13&exp=1' />
        {props.message}
      <div className={s.item_like}>
      <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;