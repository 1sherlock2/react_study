import React from "react";
import s from "../Profile_info.module.css";

const {useState} = require("react");


const ProfileStatusHook = (props) => {

	let [editProfileStatusState, editModeProfileStatusState] = useState(false);
	let [statusProfileState, editStatusProfileState] = useState(props.status);

	const activateEditMode = () => {
		editModeProfileStatusState(true);
	}
	const deActivateEditMode = () => {
		editModeProfileStatusState(false)
		props.updateUserStatusThunk(statusProfileState)
	}
	const onChangeUserStatus = (e) => {
		editStatusProfileState(e.currentTarget.value)
	}
	return (
		<div>
			{!editProfileStatusState ?
				<div className={s.status}>
					<span onDoubleClick={activateEditMode}>  {props.status || "- --"} </span>
				</div>
				:
				<div>
					<input onChange={onChangeUserStatus} onBlur={deActivateEditMode} autoFocus={true} value={statusProfileState}/>
				</div>
			}
		</div>
	)
}

export default ProfileStatusHook