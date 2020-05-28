import React from "react";
import s from "./Login.module.css"
import {LoginReduxForm} from "./LoginForm/LoginForm";

const Login = (props) => {
	let onSubmit = (formData) => {
		console.log(formData)
	}
	return (
		<div className={s.login}>
			<h1> Login </h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

export default Login

