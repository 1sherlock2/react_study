import React from "react";
import Header from "./Header";
import {setUserData} from "../../redux/Auth_reducer";
import {connect} from "react-redux";
import * as axios from "axios";


class HeaderContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {email, id, login} = response.data.data;
					this.props.setUserData(id, email, login);
				}
		})
	}

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		userId: state.authData.userId,
		email: state.authData.email,
		login: state.authData.login,
		isFetching: state.authData.isFetching,
		isAuth: state.authData.isAuth,
	}
}

export default connect(mapStateToProps,{setUserData})(HeaderContainer)