import React from "react";
import {connect} from "react-redux";
import {
	changeCurrentPage,
	Follow, getUsersThunk, toggleIsFollowingProgress,
	unFollow
} from "../../redux/Users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)

		// this.props.toggleIsFetching(true)
		// userAPI.getUsersFromServer(this.props.currentPage, this.props.pageSize).then(data => {
		// 	this.props.toggleIsFetching(false)
		// 	this.props.setUsers(data.items)
		// 	this.props.setTotalUsersCount(data.totalCount)
		// })
	}

	onChangePages = (page) => {
		this.props.getUsersThunk(page, this.props.pageSize)
		this.props.changeCurrentPage(page);

		// this.props.getUsers(page, this.props.pageSize)
		// this.props.toggleIsFetching(true);
		// userAPI.getChangesPagesFromServer(page, this.props.pageSize).then(data => {
		// 	this.props.toggleIsFetching(false);
		// 	this.props.setUsers(data.items)
		// })
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalCount={this.props.totalCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onChangePages={this.onChangePages}
						 users={this.props.users}
						 Follow={this.props.Follow}
						 unFollow={this.props.unFollow}
						 toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
						 isFollowingProgress={this.props.isFollowingProgress}
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
		isFollowingProgress: state.usersData.isFollowingProgress,
	}
}

export default connect(mapStateToProps, {
	Follow,
	unFollow,
	getUsersThunk,
	changeCurrentPage,
	toggleIsFollowingProgress
})(UsersContainer);
