import React from "react";
import s from "../News.module.css";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, requiredFiled} from "../../../Utils/Validator/Validator";
import {Textarea} from "../../Common/FromControls/Textarea/Textarea";


let maxLength10 = maxLengthCreator(50)
const NewsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name={'newsPosts'} validate={[requiredFiled, maxLength10]}/>
			<button> Add News</button>
		</form>
	)
}

export const NewsPostReduxFrom = reduxForm({
	form: 'newsForm',
})(NewsForm)
