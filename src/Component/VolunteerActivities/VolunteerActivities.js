import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './VolunteerActivities.css';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import NewEventByAdmin from '../NewEventByAdmin/NewEventByAdmin';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#f5f5f5',
        '&:hover': {
          backgroundColor: '#f9f8f8',
        },
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: '370px',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      }
  }));


const VolunteerActivities = () => {
    const classes = useStyles();
    const [event, setEvent] = useState([]);
    useEffect( () => {
        fetch('https://young-badlands-50477.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvent(data))
        
    },[])
    return (
        <div className="container">
            <div className="searchBar">
                <h1>I grow by helping people in need.</h1>
                <div className={classes.search} id="search">
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
            <div className="row">
                {event.map(event =>
                    <div className = "col-md-3">
                        <Card  className = "box">
                            <Card.Img variant="top" src={event.pic} />
                            <Card.Body>
                                <Card.Title><Link to='/register' className = "title link">{event.title}</Link></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                )}
                <NewEventByAdmin />
            </div>
        </div>
    );
};

export default VolunteerActivities;