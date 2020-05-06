import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
	return  <div className={s.users}>
			{props.users.map( (element) =>
				<div className={s.users_items} key={element.id}>
					<div className={s.users_div}>
						<span className={s.users_span}>
							{element.status
								? <button onClick={ () => {props.Follow(element.id)} }> Follow </button>
								: <button onClick={ () => {props.unFollow(element.id)} }> Unfollow </button>
							}
						</span>
						<span className={s.users_span}>
							<img className={s.users_span_img} src={element.img} />
						</span>
					</div>
					<div className={s.users_div}>
						<span className={s.users_span}>{element.name}</span>
						<span className={s.users_span}>{element.surname}</span>
					</div>
					<div className={s.users_div}>
						<span className={s.users_span}>{element.location.country}</span>
						<span className={s.users_span}>{element.location.city}</span>
						<br></br>
						<span className={s.users_span}>{element.description}</span>
					</div>
				</div>
			)}
		</div>
}

export default Users