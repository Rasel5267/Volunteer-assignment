import React from 'react';
import fakeData from '../fakeData/eventData';


const Inventory = () => {
    const handleAddEvent = () => {
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={handleAddEvent}>Add Event</button>
        </div>
    );
};

export default Inventory;