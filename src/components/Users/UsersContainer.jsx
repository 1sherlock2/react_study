import React from "react";
import {connect} from "react-redux";
import {
	changeCurrentPage,
	Follow,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching,
	unFollow
} from "../../redux/Users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)

		})
	}
	onChangePages = (page) => {
		this.props.changeCurrentPage(page);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items)
		})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null }
			<Users totalCount={this.props.totalCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onChangePages={this.onChangePages}
						 users={this.props.users}
						 Follow={this.props.Follow}
						 unFollow={this.props.unFollow}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersData.users,
		pageSize: state.usersData.pageSize,
		totalCount: state.usersData.totalCount,
		currentPage: state.usersData.currentPage,
		isFetching: state.usersData.isFetching,
	}
}

export default connect(mapStateToProps, { Follow, unFollow, setUsers, changeCurrentPage, setTotalUsersCount, toggleIsFetching,})(UsersContainer);
