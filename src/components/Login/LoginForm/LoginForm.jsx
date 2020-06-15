import React from "react";
import s from "../Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FromControls/Input/Input";
import {
	maxLengthCreator, minLengthCreator,
	requiredFiled
} from "../../../Utils/Validator/Validator";
import style from "../../Common/FromControls/FormControl.module.css"
import {getCaptchaURL} from "../../../redux/Reducers/Auth_reducer";
import {createField} from "../../Common/FromControls/CreateField/CreateField";

let maxLength20 = maxLengthCreator(30)
let minLength5 = minLengthCreator(5)

const LoginForm = React.memo(props => {
	return (
		<div className='col s8'>
			<form onSubmit={props.handleSubmit}> {/* (onSubmit (handleSubmit) ) */}
				<div>
					<Field component={Input} name={'email'} validate={[requiredFiled, maxLength20]} type="text"
								 placeholder="login"/>
				</div>
				<div>
					<Field component={Input} name={'password'} validate={[requiredFiled, minLength5]} type="password"
								 placeholder="password"/>
				</div>
				<div>
					<Field component={'input'} name={'rememberMe'} type="checkbox"/>
				</div>
				{props.error
					? <div
						className={style.formSummaryError}>   {/* {props.error} -> свойство, которое присутствует в методе onSubmit у 'redux-form' */}
						{props.error}
					</div>
					: null}
				<div>
					<button className="btn waves-effect waves-light" type="submit" name="action"> Login</button>
				</div>
				{props.getCaptcha &&
				<div>
					<img src={props.getCaptcha}/>
					<div>
						{createField('add number from image', 'captcha', [requiredFiled], Input)}
						<button className='btn'> Post captcha</button>
					</div>
				</div>}
			</form>
		</div>
	)
})

export const LoginReduxForm = reduxForm({
	form: 'login',																												// определенное наименование формы для ее идентификации, дабы отличать ее от других форм, которые у нас будут в дальнейшем
})(LoginForm)