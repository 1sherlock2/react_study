import React from "react";
import s from "./Login.module.css"
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {getCaptchaURL, loginThunk, logoutThunk, resetForm} from "../../redux/Reducers/Auth_reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
	let onSubmit = (formData) => {
		props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha) 						//можно применить реструктуризацию
		props.resetForm('login')
	}
	if (props.isAuth === true) {
		return <Redirect to={"/profile"}/>
	} else {
		return (
			<div className={s.login}>
				<h1> Login </h1>
				<LoginReduxForm onSubmit={onSubmit} getCaptcha={props.getCaptcha} getCaptchaURL={props.getCaptchaURL}/>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.authData.isAuth,
		getCaptcha: state.authData.getCaptcha,
	}
}

export default connect(mapStateToProps, {loginThunk, logoutThunk,getCaptchaURL,resetForm})(Login)

