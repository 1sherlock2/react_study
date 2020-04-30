import React from "react";
import s from "./../Nav_friends.module.css";
import {NavLink} from "react-router-dom";


const Nav_friend = (props) => {
	let path = '/friend/' + props.id;
	return (
		<div className={s.nav_friend}>
			<NavLink to={path}>
				<img src={props.img} />
				<p>{props.name}</p>
			</NavLink>
		</div>
	)
}
export default Nav_friend;