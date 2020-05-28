import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.header_img}>
				<img src='../../img/logo.jpg'/>
			</div>
			<div className={s.auth_small}>
				{props.isAuth
					? <div>
							<div>{props.login}</div>
							<button onClick={props.logoutThunk}> Logout </button>
						</div>
					: <NavLink to={'/login'}> Login </NavLink>}
			</div>
		</header>
	)
}

export default Header;