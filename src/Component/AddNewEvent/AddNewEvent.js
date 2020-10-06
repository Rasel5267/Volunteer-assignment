import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddNewEvent.css';
import { UserContext } from '../../App';

const AddNewEvent = () => {

    const [loggedInUser ] = useContext(UserContext);
    const [newEvent, setNewEvent] = useState({
        inputEventTitle: '',
        date: '',
        description: '',
        by: ''
    })

    const handleAddEvent = () => {
        const newAddedEvent = {...loggedInUser, ...newEvent};
        fetch('http://localhost:5000/addNewEvent',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newAddedEvent)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    const onChangeInput = (e) => {
        const newEventInfo = {...newEvent};
        newEventInfo[e.target.name] = e.target.value;
        setNewEvent(newEventInfo);
    }
    

    return (
        <div className="addNewEvent">
            <div className="row list-row">
                <div className="col-md-3">
                    <p>
                        <Link className="link" to="/volunteerList">
                            <i class="fas fa-user-friends"></i><span> Volunteer Register List</span>
                        </Link>
                    </p>
                    <p>
                        <Link className="link" to="/addNewEvent">
                            <i class="fas fa-plus"></i><span className="newEventList"> Add Event</span>
                        </Link>
                    </p>
                </div>
                <div className="col-md-9">
                    <h3 className ="sec-title">Add Event</h3>   
                    <div className="newEventSec">
                        <div className="newEventForm">
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Event Title</Form.Label>
                                        <Form.Control name="inputEventTitle" onChange={onChangeInput} value={newEvent.inputEventTitle} placeholder="Enter title" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Event Date</Form.Label>
                                        <Form.Control name="date" onChange={onChangeInput} value={newEvent.date} type="date" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="description" onChange={onChangeInput} value={newEvent.description} placeholder="Enter Designation"/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Are You Admin</Form.Label>
                                        <Form.Control name="by" onChange={onChangeInput} value={newEvent.by} placeholder="Yes Or No"/>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="submitBtn">
                            <Link onClick={handleAddEvent} className="link regBtn" to="/volunteerList">Submit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewEvent;