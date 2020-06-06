import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedThunk} from "./redux/Reducers/App_reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import 'materialize-css';
import store from "./redux/redux_store/redux_store";

class App extends React.Component {
	componentDidMount() {
		this.props.initializedThunk()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		} else {
			return (
				<div className='row'>
					<HeaderContainer/>
					<div className='col s3'>
						<Navbar/>
					</div>
					<div className="col s9">
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
}

const mapStateToProps = (state) => ({
	initialized: state.appData.initialized,
	isAuth: state.authData.isAuth,
})

export let AppContainer = compose(withRouter, connect(mapStateToProps, {initializedThunk}))(App)

let MainApp = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	)
}

export default MainApp;