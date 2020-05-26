import React from "react";
import s from "./Profile_info.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const Profile_info = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.profile_info}>
			<div className={s.profile_name}>
				<span> {props.profile.fullName}</span>
			</div>
			<div className={s.image_profile}>
				<img src={props.profile.photos.large}/>
			</div>
			<div className={s.description}>
				{props.profile.aboutMe}
			</div>
			<ProfileStatus status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
		</div>
	)
}
export default Profile_info;