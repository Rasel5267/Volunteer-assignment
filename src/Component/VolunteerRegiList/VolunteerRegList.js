import React, { useEffect } from 'react';
import './VolunteerRegList.css';
import {Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import { useState } from 'react';

const VolunteerRegList = () => {
    const [regList, setRegList] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/allEventList')
        .then(res => res.json())
        .then(data => setRegList(data))
    },[])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteEvent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
            })
    };
    return (
        <div className="VolunteerRegList">
            <div className="row list-row">
                <div className="col-md-3">
                    <p>
                        <Link className="link" to="/volunteerList">
                            <i class="fas fa-user-friends"></i><span className="volunteerList"> Volunteer Register List</span>
                        </Link>
                    </p>
                    <p>
                        <Link className="link" to="/addNewEvent">
                            <i class="fas fa-plus"></i><span> Add Event</span>
                        </Link>
                    </p>
                </div>
                <div className="col-md-9">
                    <h3 className ="sec-title">Volunteer register list</h3>
                    <div className="regList">
                        <div className="listItem">
                            <Table hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Registating date</th>
                                        <th>Volunteer List</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                        {
                                            regList.map(event =>
                                                <tbody>
                                                    <tr>
                                                        <td>{event.name}</td>
                                                        <td>{event.email}</td>
                                                        <td>{event.date}</td>
                                                        <td>{event.inputEventTitle}</td>
                                                        <td><i onClick={() =>handleDelete(`${event._id}`)} class="fas fa-trash-alt"></i></td>
                                                    </tr>
                                                </tbody>
                                            )
                                        }
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRegList;