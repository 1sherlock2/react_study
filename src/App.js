import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/Dialogs/MessagesContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
  // let friendsDataId = props.state.friendsData.map(el => el.id);
  // let friendsLink = `/friends/${friendsDataId}`;
  // let friends = props.state.friendsData.map(el => <Friends friendsData={props.state.friendsData} />);
  return (
    <div className='app_wrapper'>
      <Header />
      <Navbar />
      <div className="app_wrapper_content" >
        <Route path="/profile" render={ () => <Profile />} />
        <Route path="/messages" render={ () => <MessagesContainer  />} />
        <Route path="/users" render={ () => <UsersContainer /> } />
        <Route path="/news" render={ () => <News />} />
        <Route path="/music" render={ () => <Music  />} />
        <Route path="/settings" render={ () => <Settings  />} />
        {/*<Route path={friendsLink} render={ () => friends} />*/}
      </div>
    </div>
  )
}

export default App;