import React from "react";
import s from "../Login.module.css";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
	return (
		<div className={s.login_form}>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field component={'input'} name={'login'} type="text" placeholder="login"/>
				</div>
				<div>
					<Field component={'input'} name={'password'} type="password" placeholder="password" />
				</div>
				<div>
					<Field component={'input'} name={'rememberMe'} type="checkbox"/>
				</div>
				<div>
					<button>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}
export const LoginReduxForm = reduxForm({
	form:'login',																												// определенное наименование формы для ее идентификации, дабы отличать ее от других форм, которые у нас будут в дальнейшем
})(LoginForm)