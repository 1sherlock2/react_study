import React from "react";
import Header from "./Header";
import {setUserData} from "../../redux/Auth_reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import {userAPI} from "../../API/API";


class HeaderContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		userAPI.usersAuthFromServer().then(data => {
			if (data.resultCode === 0) {
				let {email, id, login} = data.data;
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