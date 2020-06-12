import React from 'react';
import Post from './Post/Post';
import {MyPostsReduxForm} from "./PostForm/PostForm";
import {reset} from 'redux-form';

const MyPosts = props => {
	let messagesData = [...props.posts].reverse().map(el => <Post key={el.id} photo={el.photo} message={el.message}
																																likesCount={el.likesCount}/>);
	const addPostsForm = (values) => {
		props.addPost(values.myPost)
		props.resetForm('myPost')
	}
	return (
		<div>
			My posts
			<div className='row'>
				<MyPostsReduxForm onSubmit={addPostsForm}/>
			</div>
			<ul className='collection'>
				{messagesData}
			</ul>
		</div>
	)
}

export default MyPosts