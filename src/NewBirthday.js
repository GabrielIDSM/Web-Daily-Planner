import React, { Component } from 'react';
import Auth from './Auth'
import axios from 'axios'
import { Bar } from './Bar'
import './NewBirthday.css'

class NewBirthday extends Component {
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
        axios.post('https://webdailyplanner-gabrielidsm.herokuapp.com/birthday', this.state.request)
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
                <div className="NewBirthday">
                    <form>
                        <div>
                            <label className="TitleDiv">New Birthday</label>
                        </div>
                        <div className="NewBirthdayTitle">
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

export { NewBirthday };