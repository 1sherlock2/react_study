import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import {connect} from "react-redux";
import {authThunk} from "./redux/Reducers/Auth_reducer";
import {compose} from "redux";
import {initializedThunk} from "./redux/Reducers/App_reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {
	componentDidMount() {
		this.props.initializedThunk()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app_wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className="app_wrapper_content">
					<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
					<Route path="/messages" render={() => <MessagesContainer/>}/>
					<Route path="/users" render={() => <UsersContainer/>}/>
					<Route path="/news" render={() => <NewsContainer/>}/>
					<Route path="/music" render={() => <MusicContainer/>}/>
					<Route path="/settings" render={() => <SettingsContainer/>}/>
					<Route path="/login" render={() => <Login/>}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.appData.initialized,
	isAuth: state.authData.isAuth,
})

export default compose(withRouter, connect(mapStateToProps, {initializedThunk, authThunk}))(App)