import React from "react";
import s from "./Login.module.css"
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/Auth_reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
	let onSubmit = (formData) => {
		props.loginThunk(formData.email, formData.password, formData.rememberMe) 						//можно применить реструктуризацию
	}
	if (props.isAuth === true) {
		return <Redirect to={"/profile"}/>
	} else {
		return (
			<div className={s.login}>
				<h1> Login </h1>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.authData.isAuth,
	}
}

export default connect(mapStateToProps, {loginThunk, logoutThunk})(Login)

