import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "./../../img/apa6.jpg";
import {setTotalUsersCountAC} from "../../redux/Users_reducer";

class Users extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)

		})
	}

	onChangePages = (page,) => {
		this.props.changeCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${page}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render() {
		let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
		let pages = [];
		 for (let i = 1; i <= pageCount; i++) {
		 	pages.push(i);
		 }
		return <div className={s.users}>
						<div className={s.cursor_pointer}>
							{pages.map(el => {
								return	<span onClick={ (e) => this.onChangePages(el)} className={this.props.currentPage === el ? s.page_selected : null}> { el } </span>
							})}
						</div>
				{/*<button className={s.getUsers}> Get Users</button>*/}
				{this.props.users.map( (el) =>
					<div className={s.users_items} key={el.id}>
						<div className={s.users_div}>
							<span className={s.users_span}>
								{el.followed
									? <button onClick={ () => {this.props.Follow(el.id)} }> Follow </button>
									: <button onClick={ () => {this.props.unFollow(el.id)} }> Unfollow </button>
								}
							</span>
							<span className={s.users_span}>
								<img className={s.users_span_img} src={el.photos.small != null ? el.photos.small : userPhoto} />
							</span>
						</div>
						<div className={s.users_div}>
							<span className={s.users_span}>{el.name}</span>
							<span className={s.users_span}>{}</span>
						</div>
						<div className={s.users_div}>
							<span className={s.users_span}>{}</span>
							<span className={s.users_span}>{}</span>
							<br></br>
							<span className={s.users_span}>{}</span>
						</div>
					</div>
				)}
			</div>

	}
}

export default Users;