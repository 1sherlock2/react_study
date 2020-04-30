import React from "react";
import s from "./Nav_friends.module.css";
import Nav_friend from "./Nav_friend/Nav_friend";



const Nav_friends = (props) => {
	return (
		<div className={s.friends_items}>
			<Nav_friend id={props.id} name={props.name} img={props.avatar} />
		</div>
	)
}
export default Nav_friends;