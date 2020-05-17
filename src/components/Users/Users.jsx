import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/apa6.jpg";
import {NavLink} from "react-router-dom";
import {followThunk, unFollowThunk} from "../../redux/Users_reducer";
import Redirect from "react-router-dom/es/Redirect";


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
					return <span onClick={(e) => props.onChangePages(el)}
											 className={props.currentPage === el ? s.page_selected : null}> {el} </span>
				})}
			</div>
			{props.users.map((el) =>
				<div className={s.users_items} key={el.id}>
					<div className={s.users_div}>
						<span className={s.users_span}>
							{(el.followed == false)
								? <button disabled={props.isFollowingProgress.some(id => id === el.id)} onClick={() => {
									followThunk(el.id)
								}}> Follow </button>
								: <button disabled={props.isFollowingProgress.some(id => id === el.id)} onClick={() => {
									unFollowThunk(el.id)
								}}> Unfollow </button>
							}
						</span>
						<span className={s.users_span}>
							<NavLink to={`/profile/${el.id}`}>
								<img className={s.users_span_img} src={el.photos.small != null ? el.photos.small : userPhoto}/>
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