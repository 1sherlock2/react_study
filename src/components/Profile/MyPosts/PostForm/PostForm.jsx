import React from "react";
import s from "../MyPosts.module.css";
import {Field, reduxForm} from "redux-form";


const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={'textarea'} name={'myPost'}
				// onChange={props.onTextareaChanges}
				// ref={props.newPostElements}
				// value={props.currentText}
			/>
			{/*<button onClick={props.onAddPost}>Add post</button>*/}
			<button> Add post </button>
		</form>
	)
}


export const MyPostsReduxForm = reduxForm({
	form: 'myPost',
})(PostForm);