import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/Users_reducer";



let mapStateToProps = (state) => {
	return {
		users: state.usersData.users,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		Follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;