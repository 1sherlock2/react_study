import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedThunk} from "./redux/Reducers/App_reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import 'materialize-css';
import store from "./redux/redux_store/redux_store";
import {SuspenseComponent} from "./components/Common/SuspenseComponent/SuspenseComponent";
import HeaderContainer from "./components/Header/HeaderContainer";


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'))
const MusicContainer = React.lazy(() => import('./components/Music/MusicContainer'))
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))

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
					<Suspense fallback={<SuspenseComponent />}>
						<div className="col s9">
							<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
							<Route path="/messages" render={() => <MessagesContainer/>}/>
							<Route path="/users" render={() => <UsersContainer/>}/>
							<Route path="/news" render={() => <NewsContainer/>}/>
							<Route path="/music" render={() => <MusicContainer/>}/>
							<Route path="/settings" render={() => <SettingsContainer/>}/>
							<Route path="/login" render={() => <Login/>}/>
						</div>
					</Suspense>
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
		<HashRouter>
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		</HashRouter>
	)
}
window.store = store

export default MainApp;