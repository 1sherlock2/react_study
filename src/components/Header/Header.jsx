import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<nav>
				{props.isAuth
					?
					<div className="nav-wrapper">
						<div className="col s12">
							<NavLink to="/profile" className="breadcrumb"> {props.login}
							<button className='btn logout' onClick={props.logoutThunk}><i className="material-icons"> exit_to_app </i></button>
							</NavLink>
						</div>
					</div>
					: <NavLink className="waves-effect waves-light btn logout" to={'/login'}><button className='btn logout'><i className="material-icons"> input </i></button></NavLink>}
			</nav>
		</header>
	)
}

export default Header;