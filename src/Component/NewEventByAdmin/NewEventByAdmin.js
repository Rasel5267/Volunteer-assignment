import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";
import eventPic from '../../logos/extraVolunteer.png';

const NewEventByAdmin = () => {
    const [adminEvent, setAdminEvent] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/newEventByAdmin')
        .then(res => res.json())
        .then(data => setAdminEvent(data))
        
      },[])

      const history = useHistory()
      const handleAddEvent = (title) => {
        console.log(title);
        history.push(`/register/${title}`);
      }
    return (
        <>
            {adminEvent.map(event =>
                <div className = "col-md-3">
                    <Card  className = "box">
                        <Card.Img variant="top" src={eventPic} />
                        <Card.Body>
                            <Card.Title><Link to='/register' onClick={() =>handleAddEvent(event.title)} className = "title link">{event.inputEventTitle}</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </>
    );
};

export default NewEventByAdmin;