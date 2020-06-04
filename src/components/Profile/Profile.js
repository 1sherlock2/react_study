import React from "react";
import s from "./Profile.module.css"
import Profile_info from "./Profile_info/Profile_info";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
	return (
		<div className='row'>
			<div className='col s12 m6'>
				<Profile_info profile={props.profile} status={props.status}
											updateUserStatusThunk={props.updateUserStatusThunk}/>
				<MyPostsContainer profile={props.profile}/>
			</div>
		</div>
	)
}

export default Profile;