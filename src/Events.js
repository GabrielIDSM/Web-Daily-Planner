import React from 'react';
import './Events.css';
import axios from 'axios'
import Auth from './Auth'

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
            <div>
                <button onClick={
                    () => {
                        if(window.confirm("Are you sure?")) {
                            var obj = {
                                email: Auth.getLogin(),
                                password: Auth.getPassword(),
                                event: event.id
                            }
                            axios.post('https://webdailyplanner-gabrielidsm.herokuapp.com/generic/delete', obj)
                                .then(response => {
                                    alert("Success")
                                    window.location.reload(false)
                                })
                                .catch(error => {
                                    alert("An error ocurred")
                                })
                        }
                    }
                }>Delete</button>
            </div>
        </div>
    );
}

export default Events;