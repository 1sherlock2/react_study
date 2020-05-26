import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsReduxForm} from "./PostForm/PostForm";

const MyPosts = (props) => {
	let messagesData = props.posts.map(el => <Post photo={el.photo} message={el.message} likesCount={el.likesCount}/>);
	const addPostsForm = (values) => {
		props.addPost(values.myPost)
	}
	return (
		<div>
			My posts
			<div>
				<MyPostsReduxForm onSubmit={addPostsForm}
													// onTextareaChanges={props.onTextareaChanges}
													// newPostElements={props.newPostElements}
													// currentText={props.currentText}
													// onAddPost={props.onAddPost}
				/>

			</div>
			<div className={s.posts}>
				{messagesData}
			</div>
		</div>
	)
}

export default MyPosts