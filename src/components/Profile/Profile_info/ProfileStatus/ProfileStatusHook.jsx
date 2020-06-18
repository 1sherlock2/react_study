import React, {useEffect, useState} from "react";


const ProfileStatusHook = (props) => {

	let [editProfileStatusState, editModeProfileStatusState] = useState(false);
	let [statusProfileState, editStatusProfileState] = useState(props.status);
	let [ownProfile,setOwnProfile] = useState(props.isOwnerProfile)

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
		<div className='row'>
			<div className='col s12' >
				<div className='row'>
					<div className='input-field col s12'>
										{!editProfileStatusState ? 
											<div>
												<blockquote style={{borderColor:"#26a69a",fontSize:'20px'}}>
											<div style={{marginLeft: '10%'}} id="icon_prefix2" className="materialize-textarea"
																onDoubleClick={activateEditMode}> {props.status || "Add status"} </div>
												</blockquote>
											</div>
											:
											<div>
												<i className="material-icons prefix" > mode_edit </i>
											<input onChange={onChangeUserStatus} onBlur={deActivateEditMode} autoFocus={true} value={statusProfileState}/>
											</div>
										}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileStatusHook