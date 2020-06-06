import React from "react";
import s from "../Profile_info.module.css";


class ProfileStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			status: this.props.status,
		}
	}
	activateEditMode = () => {
		this.setState({editMode: true})
	}
	deActivateEditMode = () => {
		this.setState({editMode: false})
		this.props.updateUserStatusThunk(this.state.status);
	}
	onChangeUserStatus = (e) => {
		this.setState({status: e.currentTarget.value})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status)
			this.setState({status: this.state.status})
	}

	render() {
		return (
			<div>
				{(this.state.editMode === false) ?
					<div className={s.status}>
						<span onDoubleClick={this.activateEditMode}> {this.props.status || "---"} </span>
					</div>
					:
					<div>
						<input onChange={this.onChangeUserStatus} autoFocus={true} onBlur={this.deActivateEditMode}
									 value={this.state.status}/>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus