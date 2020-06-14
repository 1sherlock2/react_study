import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav className='collection' style={{height: "auto"}} >
			<NavLink to="/profile" className='collection-item'>
				<div className={s.item}>
					Profile
				</div>
			</NavLink>
			<NavLink to="/messages" className='collection-item'>
				<div className={s.item}>
					Messages
				</div>
			</NavLink>
			<NavLink to="/news" className='collection-item'>
				<div className={s.item}>
					News
				</div>
			</NavLink>
			<NavLink to="/music" className='collection-item'>
				<div className={s.item}>
					Music
				</div>
			</NavLink>
			<NavLink to="/settings" className='collection-item'>
				<div className={s.item}>
					Settings
				</div>
			</NavLink>
			<NavLink to="/users" className='collection-item'>
				<div className={s.item}>
					Users
				</div>
			</NavLink>
		</nav>
	)
}

export default Navbar;