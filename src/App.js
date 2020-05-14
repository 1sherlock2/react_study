import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
  return (
    <div className='app_wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_content" >
        <Route path="/profile/:userId" render={ () => <ProfileContainer />} />
        <Route path="/messages" render={ () => <MessagesContainer  />} />
        <Route path="/users" render={ () => <UsersContainer /> } />
        <Route path="/news" render={ () => <NewsContainer />} />
        <Route path="/music" render={ () => <Music  />} />
        <Route path="/settings" render={ () => <Settings  />} />
      </div>
    </div>
  )
}

export default App;