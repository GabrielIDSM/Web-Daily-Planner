import React from 'react';
import './Events.css';

function Events({ event }) {
    return (
        <div className="UniqueEvent">
            <div className="EventTitle">
                <label>{event.title}</label>
            </div>
            <div className="Date">
                <label>{new Date(event.dateOfTheDay).toLocaleDateString("en-US")}</label>
            </div>
            <div className="Details">
                <p>{event.details}</p>
            </div>
        </div>
    );
}

export default Events;