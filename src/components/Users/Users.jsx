import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
	return  <div className={s.users}>
			{props.users.map( (el) =>
				<div className={s.users_items} key={el.id}>
					<div className={s.users_div}>
						<span className={s.users_span}>
							{el.status
								? <button onClick={ () => {props.Follow(el.id)} }> Follow </button>
								: <button onClick={ () => {props.unFollow(el.id)} }> Unfollow </button>
							}
						</span>
						<span className={s.users_span}>
							<img className={s.users_span_img} src={el.img} />
						</span>
					</div>
					<div className={s.users_div}>
						<span className={s.users_span}>{el.name}</span>
						<span className={s.users_span}>{el.surname}</span>
					</div>
					<div className={s.users_div}>
						<span className={s.users_span}>{el.location.country}</span>
						<span className={s.users_span}>{el.location.city}</span>
						<br></br>
						<span className={s.users_span}>{el.description}</span>
					</div>
				</div>
			)}
		</div>
}

export default Users