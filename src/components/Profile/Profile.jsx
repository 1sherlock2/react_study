import React from 'react';
import s from './Profile.module.css';
import Profile_info from "./Profile_info/Profile_info";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <Profile_info />
      <MyPostsContainer  store={props.store} />
    </div>
  )
}

export default Profile;