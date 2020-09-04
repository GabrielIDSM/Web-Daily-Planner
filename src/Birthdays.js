import React from 'react';
import './Birthdays.css';
import axios from 'axios'
import Auth from './Auth'

function Birthdays({ birthday }) {
    return (
        <div className="UniqueBirthday">
            <div className="BirthdayTitle">
                <label>{birthday.title}</label>
            </div>
            <div className="Date">
                <label>{new Date(birthday.dateOfTheDay).toLocaleDateString("en-US")}</label>
            </div>
            <div className="Details">
                <p>{birthday.details}</p>
            </div>
            <div>
                <button onClick={
                    () => {
                        if(window.confirm("Are you sure?")) {
                            var obj = {
                                email: Auth.getLogin(),
                                password: Auth.getPassword(),
                                event: birthday.id
                            }
                            axios.post('https://webdailyplanner-gabrielidsm.herokuapp.com/birthday/delete', obj)
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

export default Birthdays;