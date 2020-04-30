import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let messagesData = props.postData.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

  let newPostElements = React.createRef();
  let addPost = () => {
    props.addPost();
    props.currentText('')
  };
  let textareaChanges = () => {
    let text =  newPostElements.current.value;
    props.currentText(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea onChange={textareaChanges} ref={newPostElements} value={props.postData.currentText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {messagesData}
      </div>
    </div>
  )
}

export default MyPosts;