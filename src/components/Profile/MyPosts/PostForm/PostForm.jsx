import React from "react";
import s from "../MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, requiredFiled} from "../../../../Utils/Validator/Validator";
import {Textarea} from "../../../Common/FromControls/Textarea/Textarea";


let maxLength10 = maxLengthCreator(10)
const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name={'myPost'} validate={[requiredFiled,maxLength10]}/>
			<button> Add post </button>
		</form>
	)
}


export const MyPostsReduxForm = reduxForm({
	form: 'myPost',
})(PostForm);