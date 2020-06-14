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
			<div className='collection' style={{textAlign: 'center'}}>
				<NavLink to={this.path} className="collection-item">
					{this.props.name}
				</NavLink>
			</div>
		)
	}
}


export default Companion;