import React, {Component} from 'react';
import Login from '../src/views/login/login'
import SignUp from '../src/views/sign-up/sign-up'
import Dashboard from '../src/views/dashboard/dashboard'
import {Route, Switch, Redirect} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*
                Todo: Route protection for dashboard and any other required
                */}
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    {/*
                    Fallback route to login page
                    */}
                    <Redirect to="/"/>
                </Switch>
                <ToastContainer />
            </div>
        );
    }
}

export default App;
