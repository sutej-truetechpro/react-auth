import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './sign-up.scss';
import HttpService from "../../services/http-service";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userType: 3
            }
        };
        this.signUp = this.signUp.bind(this);
    }

    signUp(e) {
        e.preventDefault();
        HttpService.post('sign-up', this.state.formData)
            .then(res => {
                console.log('res', res);
                if (res && res.data.message === 'Sign up Successful!') {
                    this.props.history.push('/')
                }
            });
    }

    updateFormData(field, value) {
        let formData = this.state.formData;
        formData[field] = value;
        this.setState({formData: formData});
    }

    render() {
        return (
            <div className="sign-up-main">
                <div className="card">
                    <div className="card-header text-center">
                        Sign up
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.signUp}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" className="form-control" id="first-name"
                                           onChange={(event => this.updateFormData('firstName', event.target.value))}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="last-name">Last name</label>
                                    <input type="text" className="form-control" id="last-name"
                                           onChange={(event => this.updateFormData('lastName', event.target.value))}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"
                                           onChange={(event => this.updateFormData('email', event.target.value))}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"
                                           onChange={(event => this.updateFormData('password', event.target.value))}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone"
                                           onChange={(event => this.updateFormData('phone', event.target.value))}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">User Type</label>
                                    <select id="inputState" className="form-control" defaultValue={3}
                                            onChange={(event => this.updateFormData('userType', event.target.value))}>
                                        <option value={1}>Administrator</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Guest</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
