import React from 'react';
import Post from './Post/Post';
import {MyPostsReduxForm} from "./PostForm/PostForm";

const MyPosts = props => {
	let messagesData = props.posts.map(el => <Post photo={el.photo} message={el.message}
																								 likesCount={el.likesCount}/>);
	const addPostsForm = (values) => {
		props.addPost(values.myPost)
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