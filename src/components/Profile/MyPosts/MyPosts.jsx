import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postData = [
    {id:1, message:"Hi, how are you?", likesCount:0},
    {id:2, message:"It's my first post", likesCount:34},
    {id:3, message:"It is my second post", likesCount:12},
  ]

  let messagesData = postData.map(el => <Post message={el.message} likesCount={el.likesCount} />);

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {messagesData}
      </div>
    </div>
  )
}

export default MyPosts;