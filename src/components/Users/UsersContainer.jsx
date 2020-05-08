import React from "react";
import {connect} from "react-redux";
import {changeCurrentPageAC, FollowAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/Users_reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)

		})
	}

	onChangePages = (page) => {
		this.props.changeCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${page}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render() {
		return <Users totalCount={this.props.totalCount}
									pageSize={this.props.pageSize}
									currentPage={this.props.currentPage}
									onChangePages={this.onChangePages}
									users={this.props.users}
									Follow={this.props.Follow}
									unFollow={this.props.unFollow}

		/>
	}
}

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

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
