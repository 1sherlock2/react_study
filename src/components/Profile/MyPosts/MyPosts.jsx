import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, textareaChangesActionCreator} from "../../../redux/Profile_reducer";



const MyPosts = (props) => {
  let messagesData = props.state.postData.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

  let newPostElements = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
    props.state.postData.currentText = '';
  };
  let textareaChanges = () => {
    let text =  newPostElements.current.value;
    let action = textareaChangesActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      My posts
      <div>
        <textarea onChange={textareaChanges} ref={newPostElements} value={props.state.postData.currentText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {messagesData}
      </div>
    </div>
  )
}

export default MyPosts;