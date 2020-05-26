import React from "react";
import s from "./Login.module.css"
import {LoginReduxForm} from "./LoginForm/LoginForm";

class Login extends React.Component {
	 onSubmit = (formData) => {
		console.log(formData)
	}
	render(){
	return (
		<div className={s.login}>
			<h1> Login </h1>
			<LoginReduxForm onSubmit={this.onSubmit}/>
		</div>
	)
	}
}

export default Login

