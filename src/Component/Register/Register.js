import React from 'react';
import logo from '../../logos/Group 1329.png';
import './Register.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useParams } from "react-router-dom";
import { UserContext } from '../../App';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Register = () => {
  const {title} = useParams();
  console.log({title});
    const classes = useStyles();
    const [loggedInUser ] = useContext(UserContext);


    return (
        <div className ="register">
            <img src={logo} alt="logo" className="logo"/>
            <div className="registerForm">
                <h3>Register as a Volunteer</h3>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" value={loggedInUser.name} className="inputBox" />
                    <TextField id="standard-basic" value={loggedInUser.email} className="inputBox" />
                    <TextField id="standard-basic" required className="inputBox" label="Date" />
                    <TextField id="standard-basic" required className="inputBox" label="Description" />
                    <TextField id="standard-basic" className="inputBox" />
                    <Button variant="contained" color="primary" className="registrationBtn">
                    <Link to='/events' className = 'regLink'>Registration</Link>
                    </Button>
                </form>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Register;