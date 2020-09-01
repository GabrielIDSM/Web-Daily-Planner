import React, { Component } from 'react';
import { Bar } from './Bar';
import './App.css';
import './Bar.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Bar/>
            </div>
        );
    }
}

export { Home };