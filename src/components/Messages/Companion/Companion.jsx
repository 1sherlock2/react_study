import React, {PureComponent} from "react";
import {NavLink} from "react-router-dom";
import s from "../Messages.module.css";

class Companion extends PureComponent {
	constructor(props) {
		super(props);
		this.path = '/messages/' + this.props.id;
	}

	render() {
		return (
			<div className='collection'>
				<NavLink to={this.path} className="collection-item">
					{this.props.name}
				</NavLink>
			</div>
		)
	}
}

// <div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div>

export default Companion;