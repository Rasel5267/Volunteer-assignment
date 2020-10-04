import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div className="container">
            <div className="col-md-6 ">
                <div className="col-md-4 user-dtl">
                    <div className ="card text-center">
                        <div className="overflow">
                            <img src="" alt=""/>
                        </div>
                        <div className="card-body txt-dark">
                            <div className="card-title">Event Title</div>
                            <div className="card-text text-secondary">
                                <p>Country: Date</p>
                                <button className="btn btn-outline-success">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;