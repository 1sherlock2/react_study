import React from "react";
import Header from "./Header";
import {authThunk, setUserData} from "../../redux/Auth_reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.authThunk()
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

export default connect(mapStateToProps,{setUserData, authThunk})(HeaderContainer)