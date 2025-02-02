import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './login.scss';
import HttpService from "../../services/http-service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: ''
            },
            otp: '',
            isOtpCardVisible: false,
            loginApiHit: false
        };
        this.login = this.login.bind(this);
        this.verifyOtp = this.verifyOtp.bind(this);
    }

    login(e) {
        this.setState({loginApiHit: true});
        e.preventDefault();
        HttpService.post('login', this.state.formData)
            .then(res => {
                console.log('res', res);
                if (res && res.data.message === 'OTP mail sent successfully') {
                    this.setState({isOtpCardVisible: true});
                }
                this.setState({loginApiHit: false});
            }, (err) => {
                console.log('err', err);
                this.setState({loginApiHit: false});
            });
    }

    verifyOtp(e) {
        e.preventDefault();
        console.log('state', this.state);
        const object = {
            email: this.state.formData.email,
            otp: this.state.otp
        };
        HttpService.post('verify-otp', object)
            .then(res => {
                console.log('res', res);
                if (res && res.data.message === 'Logged in successfully') {
                    this.props.history.push('/dashboard')
                }
            });
    }
    notify () { toast.success("Wow so easy !");}

    updateFormData(field, event) {
        if (field === 'otp') {
            this.setState({otp: event.target.value});
            return
        }
        let formData = this.state.formData;
        if (field === 'email') {
            formData.email = event.target.value;
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
                    <div className={this.state.isOtpCardVisible ? 'd-none' : 'card login-form'}>
                        <div className="card-body">
                            <h3 className="card-title text-center">Log in</h3>
                            <div className={'card-text'}>
                                <form onSubmit={this.login}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control form-control-sm"
                                               onChange={($event) => this.updateFormData('email', $event)}
                                               id="exampleInputEmail1" value={this.state.formData.email}
                                               aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control form-control-sm"
                                               onChange={($event) => this.updateFormData('password', $event)}
                                               id="exampleInputPassword1" value={this.state.formData.password}/>
                                    </div>
                                    <button type="submit" className="align-items-center btn btn-block btn-primary d-flex justify-content-center">
                                        Log in
                                        <div className={this.state.loginApiHit ? 'spinner-border text-white ml-3' : 'd-none'} role="status">
                                            <span className="login-spinner sr-only">Loading...</span>
                                        </div>
                                    </button>

                                    <div className="sign-up">
                                        Don't have an account? <Link to="/sign-up">Create One</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.isOtpCardVisible ? 'card otp-form' : 'd-none'}>
                    {/*<div className={'card otp-form'}>*/}
                        <div className="card-body">
                            <h3 className="card-title text-center">Please Enter OTP</h3>
                            <div className={'card-text'}>
                                <form onSubmit={this.verifyOtp}>
                                    <div className="form-group">
                                        <label htmlFor="otp-input">OTP</label>
                                        <input type="text" className="form-control form-control-sm"
                                               onChange={($event) => this.updateFormData('otp', $event)}
                                               id="otp-input" value={this.state.otp}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Verify</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={this.notify} >test</button>
            </div>
        )
    }
}
