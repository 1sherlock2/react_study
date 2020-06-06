import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/avatar2.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Pagitanor";


const Users = (props) => {
	return (
		<div>
			<div>
				<Paginator totalCount={props.totalCount} currentPage={props.currentPage} pageSize={props.pageSize} onChangePages={props.onChangePages}/>
			</div>
			<div>
				{props.users.map((el) =>
					<div className={s.users_items} key={el.id}>
						<ul className='collection'>
						<li className='collection-item avatar'>
							<NavLink to={`/profile/${el.id}`}>
								<img className='circle' src={el.photos.small != null ? el.photos.small : userPhoto}/>
							</NavLink>
							<span className='title'> {el.name} </span>
							<p> {el.uniqueUrlName} </p>
							{(el.followed === false)
								? <NavLink to='#'  className='secondary-content' disabled={props.isFollowingProgress.some(id => id === el.id)} onClick={() => {
									props.followThunk(el.id)
								}}><i className="material-icons"> control_point </i></NavLink>
								: <NavLink to='#' className='secondary-content' disabled={props.isFollowingProgress.some(id => id === el.id)} onClick={() => {
									props.unFollowThunk(el.id)
								}}><i className="material-icons">  grade </i></NavLink>
							}
						</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Users;