import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const authRedirectComponent = (Component) => {
	let mapStateToPropsFromRedirect = (state) => {
		return {
			isAuth: state.authData.isAuth,
		}
	}
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to={`/login`} />
			return <Component {...this.props} />
		}
	}
	 return connect(mapStateToPropsFromRedirect)(RedirectComponent)
}