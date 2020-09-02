import React, { Component } from 'react';
import { Auth } from './Auth';   
import './App.css';
import './MenuBar.css';

class MenuBar extends Component {
    render() {
        return (
            <nav className="MenuBar">
                <button className="NormalButton">New Event</button>
                <button className="NormalButton">New Birthday</button>
                <button className="LogoutButton">Logout</button>
            </nav>
        );
    }
}

export { MenuBar};