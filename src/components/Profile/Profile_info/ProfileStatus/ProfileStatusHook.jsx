import React, {useEffect, useState} from "react";


const ProfileStatusHook = (props) => {

	let [editProfileStatusState, editModeProfileStatusState] = useState(false);
	let [statusProfileState, editStatusProfileState] = useState(props.status);

	useEffect(() => {
		editStatusProfileState(props.status)
	}, [props.status])

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
				<div>
					<span onDoubleClick={activateEditMode}>  {props.status || "Add status"} </span>
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