import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Nav_friends from "./Nav_Friends/Nav_friends";

const Navbar = (props) => {
	let navLinkFriends = props.friendsData.map(el => <Nav_friends id={el.id} name={el.name} img={el.avatar} /> );

	return (
		<div className={s.nav}>
			<nav>
			<NavLink to="/profile">
				<div className={s.item}>
					Profile
				</div>
			</NavLink>
			<NavLink to="/messages">
				<div className={s.item}>
					Messages
				</div>
			</NavLink>
			<NavLink to="/news">
				<div className={s.item} >
					News
				</div>
			</NavLink>
			<NavLink to="/music">
				<div className={s.item} >
					Music
				</div>
			</NavLink>
			<NavLink to="/settings">
				<div className={s.item} >
					Settings
				</div>
			</NavLink>
				<div className={s.sidebarFriend}>
					{navLinkFriends}
				</div>
			</nav>
		</div>
	)
}

export default Navbar;