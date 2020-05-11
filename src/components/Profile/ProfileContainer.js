import React from 'react';
import s from './Profile.module.css';
import Profile_info from "./Profile_info/Profile_info";
import MyPostsContainer from "./MyPosts/MyPostContainer";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.profile}>
        <Profile_info />
        <MyPostsContainer />
      </div>
    )
  }
}

export default ProfileContainer;