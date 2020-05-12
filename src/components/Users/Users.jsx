import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/apa6.jpg";
import * as axios from "axios";
import {NavLink} from "react-router-dom";




const Users = (props) => {
	let pageCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return (
		<div className={s.users}>
			<div className={s.cursor_pointer}>
				{pages.map(el => {
					return	<span onClick={ (e) => props.onChangePages(el)} className={props.currentPage === el ? s.page_selected : null}> { el } </span>
				})}
			</div>
			{props.users.map( (el) =>
				<div className={s.users_items} key={el.id}>
					<div className={s.users_div}>
						<span className={s.users_span}>
							{ (el.followed == false)
								? <button onClick={() => {
									axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, { }, {
										withCredentials: true,
										headers: {
											'API-KEY': 'd3e184b5-2525-4316-8fdb-e696fcf93fc5',
										},
									}).then(response => {
										if (response.data.resultCode == 0) {
											props.Follow(el.id);
										}
									})
								}}> Follow </button>
								:  <button onClick={() => {
									axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
										withCredentials: true,
										headers: {
											'API-KEY': 'd3e184b5-2525-4316-8fdb-e696fcf93fc5',
										},
									}).then(response => {
										if (response.data.resultCode == 0) {
											props.unFollow(el.id);
										}
									})
								}}> Unfollow </button>
							}
						</span>
						<span className={s.users_span}>
							<NavLink to={`/profile/${el.id}`}>
								<img className={s.users_span_img} src={el.photos.small != null ? el.photos.small : userPhoto} />
							</NavLink>
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

export default Users;