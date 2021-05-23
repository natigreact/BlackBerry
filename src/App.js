import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import "./App.css";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";

import HeaderBarContainer from "./components/Header/HeaderBarContainer";
import About from "./components/Header/HeaderComponents/About";
import Contacts from "./components/Header/HeaderComponents/Contacts";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {initializeApp} from "../src/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //Lazy Loading
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); //Lazy Loading

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
}

render() {
  if(!this.props.initialized) {
  return <Preloader />
  }

  return (
   
      <div className="app-wrapper">
        <HeaderBarContainer/>
        <Navbar />
        <div className="app-wrapper-content">
          <Route  path="/dialogs" 
                  render={withSuspense(DialogsContainer)}/>

          <Route  path="/profile/:userId?" 
                  render={withSuspense(ProfileContainer)}/>
                  
          <Route  path="/users" render={() => <UsersContainer />} />
          <Route  path="/news" component={News} />
          <Route  path="/music" component={Music} />
          <Route  path="/settings" component={Settings} />
          <Route  path="/contacts" component={Contacts} />
          <Route  path="/about" component={About} />
          <Route  path="/login" component={Login} />
        </div>
      </div>
    
  )
 }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps ,{
  initializeApp
})(App);
