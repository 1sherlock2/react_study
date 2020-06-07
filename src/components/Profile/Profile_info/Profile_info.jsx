import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";
import imagePhoto from "../../../img/avatar1.jpg"

const Profile_info = React.memo(props => {
	if (!props.profile) {
		return <Preloader/>
	}

	let changeImage = (e) => {
		if (e.target.files.length) {
			props.changeImageThunk(e.target.files[0])
		}
	}

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={props.profile.photos.large !== null ? props.profile.photos.large : imagePhoto }/>
				{props.isOwnerProfile && <input type={'file'} onChange={changeImage} />}
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

