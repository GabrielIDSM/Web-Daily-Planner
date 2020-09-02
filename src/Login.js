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

    render() {
        return (
            <div className="Login">
                <Bar />
                <div className="MainDiv">
                    <form>
                        <div className="EmailDiv">
                            <label>E-mail</label>
                            <input type="text" value={this.state.request.email} onChange={this.changeEmailHandler}></input>
                        </div>
                        <div className="PasswordDiv">
                            <label>Password</label>
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
            </div>
        );
    }
}

export default withRouter(Login);
export { Login };