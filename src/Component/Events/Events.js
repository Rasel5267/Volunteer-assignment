import React, { useContext } from 'react';
import './Events.css';
import cardImg from '../../logos/extraVolunteer.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';

const Events = () => {
    const [eventList, setEventList] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() =>{
        fetch('https://young-badlands-50477.herokuapp.com/addEvents?email='+loggedInUser.email,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setEventList(data))
    },[])

    const handleCancel = (id) => {
        fetch(`https://young-badlands-50477.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
            })
    };

    return (
        <div className="container">
            <div className="userEvent-list row justify-content-between">
                {
                    eventList.map(newEvent =>
                        <div className="eventCard col-md-5.5">
                            <div className="cardImg">
                                <img className="img" src={cardImg} alt="img"/>
                            </div>
                            <div className="body">
                                <h6>{newEvent.inputEventTitle}</h6>
                                <p>{newEvent.date}</p>
                                <button onClick={() =>handleCancel(`${newEvent._id}`)} className="cancelBtn">Cancel</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Events;