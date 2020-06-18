import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutThunk, setUserData } from '../../redux/Reducers/Auth_reducer';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  // 	this.props.authThunk()
  // }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.authData.userId,
  email: state.authData.email,
  login: state.authData.login,
  isFetching: state.authData.isFetching,
  isAuth: state.authData.isAuth,
});

export default connect(mapStateToProps, { setUserData, logoutThunk })(HeaderContainer);
