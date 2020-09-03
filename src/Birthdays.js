import React from 'react';
import './Birthdays.css';

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
        </div>
    );
}

export default Birthdays;