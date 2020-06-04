import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredFiled} from "../../../../Utils/Validator/Validator";
import {Textarea} from "../../../Common/FromControls/Textarea/Textarea";


let maxLength10 = maxLengthCreator(100)
const PostForm = (props) => {
	return (
		<form className='col s12' onSubmit={props.handleSubmit}>
			<div className='row'>
				<div className='input-field col s6'>
					<Field component={Textarea} name={'myPost'} validate={[requiredFiled, maxLength10]} id="icon_prefix2"
								 class="materialize-textarea"/>
					<button className="btn waves-effect waves-light" type="submit" name="action">Send</button>
				</div>
			</div>
		</form>
	)
}


export const MyPostsReduxForm = reduxForm({
	form: 'myPost',
})(PostForm);