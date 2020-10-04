import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Events from './Component/Events/Events';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import { useState } from 'react';
import PrivetRoute from './Component/PrivateRoute/PrivetRoute';
import Header from './Component/Header/Header';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/donation">
              <Donation />
            </Route>
            <Route path="/event">
              <Events />
            </Route>
              <Route path="/logIn">
                <LogIn />
              </Route>
              <PrivetRoute path="/register">
                <Register />
              </PrivetRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
