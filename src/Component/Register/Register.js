import React from 'react';
import logo from '../../logos/Group 1329.png';
import './Register.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Register = () => {
    const classes = useStyles();
    const [loggedInUser ] = useContext(UserContext);
    const [newReg, setNewReg] = useState({
      date: '',
      description: '',
      inputEventTitle: ''
  })

  const handleAddNewEvent = () => {
    const newAddedEvent = {...loggedInUser, ...newReg};
    fetch('https://young-badlands-50477.herokuapp.com/newEvent',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newAddedEvent)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
  }


  const onChangeEvent = (e) => {
    const newAddEventInfo = {...newReg};
    newAddEventInfo[e.target.name] = e.target.value;
    setNewReg(newAddEventInfo);
    console.log(newAddEventInfo);
  }
    


    return (
        <div className ="register">
            <img src={logo} alt="logo" className="logo"/>
            <div className="registerForm">
                <h3>Register as a Volunteer</h3>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField name="inputName" value={loggedInUser.name} className="inputBox" label="Full Name"/>
                    <TextField name="inputEmail" value={loggedInUser.email} className="inputBox" label="User Name Or Email"/>
                    <TextField name="date" onChange={onChangeEvent} value={newReg.date} type="date" className="inputBox" />
                    <TextField name="description" onChange={onChangeEvent} value={newReg.description} required className="inputBox" label="Set Description"/>
                    <TextField name="inputEventTitle" onChange={onChangeEvent} value={newReg.inputEventTitle} className="inputBox" label="What Event you want to work"/>
                    <Button variant="contained" color="primary" className="registrationBtn">
                      <Link onClick={handleAddNewEvent} to='/event' className = 'regLink'>Registration</Link>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;