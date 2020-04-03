import React, {Component} from 'react';
import Login from '../src/views/login/login'
import SignUp from '../src/views/sign-up/sign-up'
import Dashboard from '../src/views/dashboard/dashboard'
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    {/*<Redirect to="/"/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;
