import React from "react";
import s from "../Messages.module.css";
import {Field, reduxForm} from "redux-form";


const MessagesForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={'textarea'} name={'message'}
				// value={props.currentDialogsData}
				// onChange={props.onTextareaChangesInMessages}
			/>
			<button> Add</button>
		</form>
	)
}

export const MessagesReduxForm = reduxForm({
	form: 'messages',
})(MessagesForm)