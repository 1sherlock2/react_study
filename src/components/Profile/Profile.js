import React from "react";
import Profile_info from "./Profile_info/Profile_info";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
	return (
		<div>
			<Profile_info saveProfileInformationThunk={props.saveProfileInformationThunk}
										isOwnerProfile={props.isOwnerProfile} profile={props.profile}
										status={props.status} changeImageThunk={props.changeImageThunk}
										updateUserStatusThunk={props.updateUserStatusThunk}/>
			<MyPostsContainer profile={props.profile}/>
		</div>
	)
}

export default Profile;