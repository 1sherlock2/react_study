import React from "react";
import {connect} from "react-redux";
import {
	changeCurrentPage,
	followThunk, getUsersThunk, toggleIsFollowingProgress, unFollowThunk
} from "../../redux/Reducers/Users_reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
	currentPageState, isAuthState,
	isFetchingState, isFollowingProgressState,
	pageSizeState,
	totalCountState, usersStateSelector
} from "../../redux/Selectors/Users_selectors";


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
	}



	onChangePages = (page) => {
		this.props.getUsersThunk(page, this.props.pageSize)
		this.props.changeCurrentPage(page);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalCount={this.props.totalCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onChangePages={this.onChangePages}
						 users={this.props.users}
						 followThunk={this.props.followThunk}
						 unFollowThunk={this.props.unFollowThunk}
						 toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
						 isFollowingProgress={this.props.isFollowingProgress}
						 isAuth={this.props.isAuth}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: usersStateSelector(state),
		pageSize: pageSizeState(state),
		totalCount: totalCountState(state),
		currentPage: currentPageState(state),
		isFetching: isFetchingState(state),
		isFollowingProgress: isFollowingProgressState(state),
		isAuth: isAuthState(state),
	}
}

export default connect(mapStateToProps, {
	followThunk,
	unFollowThunk,
	getUsersThunk,
	changeCurrentPage,
	toggleIsFollowingProgress
})
(UsersContainer)