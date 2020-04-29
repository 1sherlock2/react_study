import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={s.nav}>
		<NavLink to="/profile">
			<div className={s.item}>
				Profile
			</div>
		</NavLink>
		<NavLink to="/messages">
			<div className={`${s.item} ${s.activeLink}`}>
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
	</nav>
	)
}

export default Navbar;