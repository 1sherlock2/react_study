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
							<NavLink to="/profile" className="breadcrumb"> {props.login} </NavLink>
						<button className='btn logout' onClick={props.logoutThunk}> Logout </button>
						</div>
					</div>
					: <NavLink className="waves-effect waves-light btn logout" to={'/login'}><i className="material-icons left"> Login </i> </NavLink>}
			</nav>
		</header>
	)
}
// <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>

// <nav>
// 	<div className="nav-wrapper">
// 		<div className="col s12">
// 			<a href="#!" className="breadcrumb">First</a>
// 			<a href="#!" className="breadcrumb">Second</a>
// 			<a href="#!" className="breadcrumb">Third</a>
// 		</div>
// 	</div>
// </nav>

export default Header;