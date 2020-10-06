import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Events from './Component/Events/Events';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import { useState } from 'react';
import PrivetRoute from './Component/PrivateRoute/PrivetRoute';
import Header from './Component/Header/Header';
import VolunteerRegList from './Component/VolunteerRegiList/VolunteerRegList';
import AddNewEvent from './Component/AddNewEvent/AddNewEvent';


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
            <PrivetRoute path="/addNewEvent">
              <AddNewEvent />
            </PrivetRoute>
            <Route path="/event">
              <Events />
            </Route>
              <Route path="/logIn">
                <LogIn />
              </Route>
              <PrivetRoute path="/volunteerList">
                <VolunteerRegList />
              </PrivetRoute>
              <PrivetRoute path="/register">
                <Register />
              </PrivetRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
