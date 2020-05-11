import React from "react";
import s  from "./Profile.module.css"
import Profile_info from "./Profile_info/Profile_info";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
	return (
		<div className={s.profile}>
			<Profile_info profile={props.profile} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile;