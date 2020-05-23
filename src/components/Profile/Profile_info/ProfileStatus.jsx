import React from "react";
import s from "./Profile_info.module.css";


class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	}

	activateEditMode() {
		this.setState(
			{editMode: true}
		)
	}

	deActivateEditMode() {
		this.setState(
			{editMode: false}
		)
	}

	render() {
		return (
			<>
				{(this.state.editMode === false) ?
					<div className={s.description}>
						<span onDoubleClick={this.activateEditMode.bind(this)}>  {this.props.status} </span>
					</div>
					:
					<div>
						<input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} type='text' value={this.props.status}/>
					</div>
				}
			</>
		)
	}
}

export default ProfileStatus