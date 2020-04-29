import React from "react";
import s from "./Companion.module.css";
import {NavLink} from "react-router-dom";


const Companion = (props) => {
	let path = '/messages/' + props.id;

	return (
		<div className={s.companions}>
			<NavLink to={path} className={s.companions_items}>
				<div className={s.companion}>
					<p>
						{props.name}
					</p>
				</div>
			</NavLink>
		</div>
	)
}

export default Companion;