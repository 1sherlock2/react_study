import React from "react";
import {connect} from "react-redux";
import Users from "./Users_Class";
import {changeCurrentPageAC, FollowAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/Users_reducer";



let mapStateToProps = (state) => {
	return {
		users: state.usersData.users,
		pageSize: state.usersData.pageSize,
		totalCount: state.usersData.totalCount,
		currentPage: state.usersData.currentPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		Follow: (userId) => {
			dispatch(FollowAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		changeCurrentPage: (page) => {
			dispatch(changeCurrentPageAC(page))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount))
		}
	}
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;