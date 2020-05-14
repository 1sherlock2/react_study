import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let messagesData = props.posts.map(el => <Post photo={el.photo}  message={el.message} likesCount={el.likesCount} />);
  return (
    <div>
      My posts
      <div>
        <textarea onChange={props.onTextareaChanges} ref={props.newPostElements} value={props.currentText} />
        <button onClick={props.onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {messagesData}
      </div>
    </div>
  )
}

export default MyPosts;