import React, { Component } from 'react';
import Auth from './Auth'
import axios from 'axios';
import { Bar } from './Bar';
import { withRouter } from 'react-router-dom'
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            request: {
                email: "",
                password: ""
            },
            new: {
                email: "",
                name: "",
                password: ""
            }
        }
    }

    changeEmailHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.request
            obj.email = value
            return { obj }
        })
    }

    changePasswordHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.request
            obj.password = value
            return { obj }
        })
    }

    changeNewEmailHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.new
            obj.email = value
            return { obj }
        })
    }

    changeNewNameHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.new
            obj.name = value
            return { obj }
        })
    }

    changeNewPasswordHandler = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState.new
            obj.password = value
            return { obj }
        })
    }

    render() {
        return (
            <div className="Login">
                <Bar />
                <div className="MainDiv">
                    <form>
                        <div className="TitleDiv">
                            <label className="Lbl">Login</label>
                        </div>
                        <div className="EmailDiv">
                            <label className="Lbl">E-mail</label>
                            <input type="text" value={this.state.request.email} onChange={this.changeEmailHandler}></input>
                        </div>
                        <div className="PasswordDiv">
                            <label className="Lbl">Password</label>
                            <input type="password" value={this.state.request.password} onChange={this.changePasswordHandler}></input>
                        </div>
                        <div className="ButtonDiv">
                            <button type="submit" onClick={
                                (e) => {
                                    e.preventDefault()
                                    console.log(this.state.request)
                                    console.log(this.props)
                                    axios.post('https://webdailyplanner-gabrielidsm.herokuapp.com/user/login', this.state.request)
                                        .then(() => {
                                            Auth.login(this.state.request.email, this.state.request.password, () => {
                                                this.props.history.push('/dashboard')
                                            })
                                        })
                                        .catch(error => {
                                            console.log(error)
                                            alert("An error ocurred, check the e-mail and password")
                                        })
                                }
                            }>Login</button>
                        </div>
                    </form>
                </div>
                <div className="MainDiv">
                    <form>
                        <div className="TitleDiv">
                            <label>Sign Up</label>
                        </div>
                        <div className="EmailDiv">
                            <label className="Lbl">E-mail</label>
                            <input type="text" value={this.state.new.email} onChange={this.changeNewEmailHandler}></input>
                        </div>
                        <div className="EmailDiv">
                            <label className="Lbl">Name</label>
                            <input type="text" value={this.state.new.name} onChange={this.changeNewNameHandler}></input>
                        </div>
                        <div className="PasswordDiv">
                            <label className="Lbl">Password</label>
                            <input type="password" value={this.state.new.password} onChange={this.changeNewPasswordHandler}></input>
                        </div>
                        <div className="ButtonDiv">
                            <button type="submit" onClick={
                                (e) => {
                                    e.preventDefault()
                                    console.log(this.state.request)
                                    console.log(this.props)
                                    axios.post('https://webdailyplanner-gabrielidsm.herokuapp.com/user', this.state.new)
                                        .then(() => {
                                            alert("Success")
                                        })
                                        .catch(error => {
                                            console.log(error)
                                            alert("An error ocurred, check the form")
                                        })
                                }
                            }>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
export { Login };