import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profile_info from "./Profile_info/Profile_info";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <Profile_info />
      <MyPosts state={props.state} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;