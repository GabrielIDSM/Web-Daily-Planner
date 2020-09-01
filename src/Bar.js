import React, { Component } from 'react';
import './App.css';
import './Bar.css';

class Bar extends Component {
    render() {
        return (
            <nav className="Bar">
                <p className="Title"><b>Web Daily Planner</b></p>
            </nav>
        );
    }
}

export { Bar };