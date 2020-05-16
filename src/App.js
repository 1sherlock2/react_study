import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";


const App = () => {
  return (
    <div className='app_wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_content" >
        <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
        <Route path="/messages" render={ () => <MessagesContainer  />} />
        <Route path="/users" render={ () => <UsersContainer /> } />
        <Route path="/news" render={ () => <NewsContainer />} />
        <Route path="/music" render={ () => <MusicContainer  />} />
        <Route path="/settings" render={ () => <SettingsContainer  />} />
        <Route path="/login" render={ () => <Login  />} />
      </div>
    </div>
  )
}

export default App;