import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header>
			<nav>
				{props.isAuth
					?
					<div className="row" style={{background:"#26a69a"}}>
						<div className='col s6'>
							<NavLink to="/profile" className="breadcrumb"> {props.login} </NavLink>
						</div>
						<div className='col s6'>
							<button className='btn logout' style={{marginLeft: '80%'}} onClick={props.logoutThunk}><i
								className="material-icons" style={{lineHeight: '40px'}}> exit_to_app </i></button>
						</div>
					</div>
					:
					<div className="col s12" style={{background:"#26a69a"}}>
						<NavLink className="breadcrumb" to={'/login'} style={{marginLeft: '95%'}}>
							<button className='btn'><i className="material-icons" style={{lineHeight: '40px'}}> input </i></button>
						</NavLink>
					</div>}
			</nav>
		</header>
	)
}

export default Header;