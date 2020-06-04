import React from "react";
import s from "../Profile.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";
import imagePhoto from "../../../img/avatar1.jpg"

const Profile_info = React.memo(props => {
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div className='card'>
			<div className='card-image'>
				<img src={props.profile.photos.large !== null ? props.profile.photos.large : imagePhoto }/>
			</div>
			<div>
				<span className='card-title'> {props.profile.fullName}</span>
				<span className='card-title"'> {props.profile.aboutMe} </span>
				<ProfileStatusHook status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
			</div>
		</div>
	)
})

export default Profile_info;