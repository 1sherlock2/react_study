import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let messagesData = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

   let currentText = props.currentText;

  let newPostElements = React.createRef();
  let onTextareaChanges = () => {
    let text =  newPostElements.current.value;
    props.textareaChanges(text);
  };
  let onAddPost = () => {
    props.addPost();
  };

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onTextareaChanges} ref={newPostElements} value={currentText} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {messagesData}
      </div>
    </div>
  )
}

export default MyPosts;