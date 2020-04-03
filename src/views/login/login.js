import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './login.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: ''
            }
        };
        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        console.log('hi', this.state.formData);
    }

    updateFormData(field, event) {
        let formData = this.state.formData;
        if (field === 'username') {
            formData.userName = event.target.value;
        }
        if (field === 'password') {
            formData.password = event.target.value;
        }
        this.setState({formData: formData});
    }

    render() {
        return (
            <div className="login-main">
                <div className="global-container">
                    <div className="card login-form">
                        <div className="card-body">
                            <h3 className="card-title text-center">Log in</h3>
                            <div className={'card-text'}>
                                <div className={'alert alert-danger alert-dismissible fade show'} role="alert">sd
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control form-control-sm"
                                               id="exampleInputEmail1"
                                               aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control form-control-sm"
                                               id="exampleInputPassword1"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>

                                    <div className="sign-up">
                                        Don't have an account? <Link to="/sign-up">Create One</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
