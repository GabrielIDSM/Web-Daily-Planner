import React, { Component } from 'react';
import { Bar } from './Bar'
import Events from './Events'
import Birthdays from './Birthdays'
import Auth from './Auth'
import axios from 'axios';
import './MenuBar.css';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                genericEvents: [],
                birthdayEvents: []
            }
        }
    }

    componentDidMount() {
        var obj = {
            email: "",
            password: ""
        }
        obj.email = Auth.getLogin()
        obj.password = Auth.getPassword()
        axios.post('https://webdailyplanner-gabrielidsm.herokuapp.com/day', obj)
            .then((response) => {
                this.setState({
                    data: {
                        genericEvents: response.data.genericEvents,
                        birthdayEvents: response.data.birthdayEvents
                    }
                })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error)
                alert("An error ocurred")
            })
    }

    render() {
        return (
            <div>
                <Bar />
                <nav className="MenuBar">
                    <button className="NormalButton" onClick={
                        () => {
                            this.props.history.push('/newevent')
                        }
                    }>New Event</button>
                    <button className="NormalButton" onClick={
                        () => {
                            this.props.history.push('/newbirthday')
                        }
                    }>New Birthday</button>
                    <button className="LogoutButton" onClick={
                        () => {
                            Auth.logout(() => {
                                this.props.history.push('/')
                            })
                        }
                    }>Logout</button>
                </nav>
                    { this.state && this.state.data &&
                        <div className="EventsList">
                            <div className="EventsBarTitle">
                                <label>Events</label>
                            </div>
                            <div className="Events">
                                {this.state.data.genericEvents.map(event => <Events key={event.id} event={event} />)}
                            </div>
                            <div className="BirthdaysBarTitle">
                                <label>Birthdays</label>
                            </div>
                            <div className="Birthdays">
                                {this.state.data.birthdayEvents.map(birthday => <Birthdays key={birthday.id} birthday={birthday} />)}
                            </div>
                        </div>
                    }
            </div>
        );
    }
}

export { Dashboard };