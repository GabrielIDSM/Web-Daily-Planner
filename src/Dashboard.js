import React, { Component } from 'react';
import { Bar } from './Bar'
import Auth from './Auth'
import './MenuBar.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Bar />
                <nav className="MenuBar">
                    <button className="NormalButton">New Event</button>
                    <button className="NormalButton">New Birthday</button>
                    <button className="LogoutButton" onClick={
                        () => {
                            Auth.logout(() => {
                                this.props.history.push('/')
                            })
                        }
                    }>Logout</button>
                </nav>
            </div>
        );
    }
}

export { Dashboard };