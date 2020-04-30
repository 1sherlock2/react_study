import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let messagesData = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount} />);

  let newPostElements = React.createRef();
  let addPost = () => {
    let text =  newPostElements.current.value;
    props.addPost(text);
    newPostElements.current.value = '';
  }

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElements} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {messagesData}
      </div>
    </div>
  )
}

export default MyPosts;