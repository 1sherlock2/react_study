import React from "react";
import s from "./Profile_info.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const Profile_info = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.profile_info}>
			<div className={s.image_profile}>
				<img src={props.profile.photos.large}/>
			</div>
			<ProfileStatus status='Status'/>
			{/*<div className={s.description}>*/}
			{/*	{props.profile.aboutMe}*/}
			{/*</div>*/}
		</div>
	)
}
export default Profile_info;