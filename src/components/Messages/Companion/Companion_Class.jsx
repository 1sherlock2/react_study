import React, {PureComponent} from "react";
import s from "./Companion.module.css";
import {NavLink} from "react-router-dom";


class Companion extends PureComponent {
	constructor(props) {
		super(props);
	 	this.path = '/messages/' + this.props.id;
	}
	render() {
		return (
			<div className={s.companions}>
				<NavLink to={this.path} className={s.companions_items}>
					<div className={s.companion}>
						<p>
							{this.props.name}
						</p>
					</div>
				</NavLink>
			</div>
		)
	}
}

export default Companion;