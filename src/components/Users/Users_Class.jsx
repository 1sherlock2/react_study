import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "./../../img/apa6.jpg";

class Users extends React.Component {
	constructor(props) {
		super(props);
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<div className={s.users}>
				<button> Get Users</button>
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
		)
	}
}

export default Users;