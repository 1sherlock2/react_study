import React from "react";
import s  from "./Profile.module.css"
import Profile_info from "./Profile_info/Profile_info";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {updateUserStatusThunk} from "../../redux/Profile_reducer";


const Profile = (props) => {
	return (
		<div className={s.profile}>
			<Profile_info profile={props.profile} status={props.status} updateUserStatusThunk={props.updateUserStatusThunk} />
			<MyPostsContainer  profile={props.profile}/>
		</div>
	)
}

export default Profile;