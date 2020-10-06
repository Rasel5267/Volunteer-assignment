import React, { useState } from 'react';
import './Headers.css';
import logo from '../../logos/Group 1329.png';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { NavDropdown } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    }
}));

const Header = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    let buttons;

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setUser(signOutUser);
            setLoggedInUser(signOutUser);
          }).catch(function(error) {
            // An error happened.
          });
    }

    if(loggedInUser.email){
        buttons = (
            <NavDropdown title={loggedInUser.name} id="basic-nav-dropdown" >
                <NavDropdown.Item><Link to="/volunteerList" className = "link">Go to Admin</Link></NavDropdown.Item>
                <NavDropdown.Item onClick={handleSignOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
        )
    }
    else{
        buttons = (
            <ul className="navbar-nav menuBtn">
                <li className="nav-item">
                    <Link to="/Login" className = "regBtn link">Register</Link>
                    <Link to="/volunteerList" className = "adminBtn link">Admin</Link>
                </li>
            </ul>
        )
    }

    return (
        <div className="container">
            <div className={classes.root}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <img src={logo} alt="logo" className="logo"/>
                        </Typography>
                        <MenuItem><Link to="/" className = "link">Home</Link></MenuItem>
                        <MenuItem><Link to="/donation" className = "link">Donation</Link></MenuItem>
                        <MenuItem><Link to="/event" className = "link">Events</Link></MenuItem>
                        <MenuItem><Link to="/blog" className = "link">Blog</Link></MenuItem>
                        {buttons}
                    </Toolbar>
            </div>
        </div>
    );
};

export default Header;