import React, {useEffect, useState} from "react";
import s from "./Settings.module.css";


const Settings = (props => {
//
// 	let [editProfileFullName, setEditProfileFullName] = useState(false)
// 	let [profileFullName, setProfileFullName] = useState(props.profile.fullName)
//
// 	useEffect(() => {
// 		setProfileFullName(props.profile.fullName)
// 	}, [props.profile.fullName])
//
// 	let activateMode = () => {
// 		setEditProfileFullName(true)
// 	}
// 	let onChangeFullName = (e) => {
// 		setProfileFullName(e.currentTarget.value)
// 	}
// 	let deActivateEditProfileStatus = () => {
// 		setEditProfileFullName(false)
// 		// props.updateProfileFullName(profileFullName)
// 	}
//
	return (
		<div style={{fontSize: '30px'}}>
			<blockquote>
				Settings
			</blockquote>
			{/*<div>*/}
			{/*	Change your name:*/}
			{/*	{!editProfileFullName ?*/}
			{/*	<span onClick={activateMode}> {props.profile.fullname || 'Add Name'}</span>*/}
			{/*	:	<input onChange={onChangeFullName} onBlur={deActivateEditProfileStatus} autoFocus={true} value={profileFullName}/>*/}
			{/*	}*/}
			{/*</div>*/}
		</div>
	)
})

export default Settings;