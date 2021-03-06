import React, { Component } from 'react';
import Auth from './Auth'
import axios from 'axios'
import { Bar } from './Bar'
import './NewEvent.css'

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: {
                email: Auth.getLogin(),
                password: Auth.getPassword(),
                title: "",
                details: "",
                dateOfTheDay: null
            }
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state.request)
        axios.post('https://webdailyplanner-gabrielidsm.herokuapp.com/generic', this.state.request)
            .then(response => {
                alert("Success")
                this.props.history.push('/dashboard')
            })
            .catch(error => {
                alert("An error ocurred")
            })
    }

    changeTitleHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.request
            obj.title = value
            return { obj }
        })
    }

    changeDetailsHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.request
            obj.details = value
            return { obj }
        })
    }

    changeDateHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.request
            obj.dateOfTheDay = value
            return { obj }
        })
    }

    render() {
        return (
            <div>
                <Bar />
                <div className="NewEvent">
                    <form>
                        <div>
                            <label className="TitleDiv">New Event</label>
                        </div>
                        <div className="NewEventTitle">
                            <label className="Lbl">Title</label>
                            <input type="text" value={this.state.request.title} onChange={this.changeTitleHandler}></input>
                        </div>
                        <div className="Date">
                            <label className="Lbl">Date</label>
                            <input type="date" value={this.state.request.dateOfTheDay} onChange={this.changeDateHandler}></input>
                        </div>
                        <div className="Details">
                            <label className="Lbl">Details</label>
                            <textarea rows="4" cols="50" value={this.state.request.details} onChange={this.changeDetailsHandler}></textarea>
                        </div>
                        <div className="Button">
                            <button onClick={this.submitHandler}>Create</button>
                            <button onClick={() => {
                                this.props.history.push('/dashboard')
                            }}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export { NewEvent };