import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let messagesData = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount} />);

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