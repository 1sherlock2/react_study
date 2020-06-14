import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "../Messages.module.css"
import {Textarea} from "../../Common/FromControls/Textarea/Textarea";

const MessagesForm = (props) => {
	return (
		<div className='row'>
			<form className='col s12' onSubmit={props.handleSubmit}>
				<div className='row'>
					<div className='input-field col s12'>
						<Field id='textarea1' className='materialize-textarea' component={Textarea} name={'message'}/>
						<label htmlFor="textarea1">Message</label>
						<div className={s.messagesFromButton}>
							<button className="btn waves-effect waves-light" type="submit" name="action"> Send
								<i className="material-icons right"></i>
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export const MessagesReduxForm = reduxForm({
	form: 'messages',
})(MessagesForm)