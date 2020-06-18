import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {authRedirectComponent} from '../../HOC/AuthRedirectComponent';
import {
  profileServerThunk,
  setUserProfile,
  setUserStatusThunk,
  changeImageThunk,
  toggleIsFetchingLoad, updateUserStatusThunk, saveProfileInformationThunk,
} from '../../redux/Reducers/Profile_reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let {userId} = this.props.match.params;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        userId = this.props.history.push('login');
      }
    }
    this.props.profileServerThunk(userId);
    this.props.setUserStatusThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevStatus) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        isOwnerProfile={!this.props.match.params.userId}
        saveProfileInformationThunk={this.props.saveProfileInformationThunk}
        {...this.props}
        changeImageThunk={this.props.changeImageThunk}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatusThunk={this.props.updateUserStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.postData.profile,
  isFetching: state.postData.isFetching,
  status: state.postData.status,
  photo: state.postData.photo,
  userId: state.authData.userId,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    setUserStatusThunk,
    toggleIsFetchingLoad,
    profileServerThunk,
    updateUserStatusThunk,
    changeImageThunk,
    saveProfileInformationThunk,
  }), withRouter, authRedirectComponent,
)(ProfileContainer);
