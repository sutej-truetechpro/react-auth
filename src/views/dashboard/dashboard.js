import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './dashboard.scss'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="dashboard-main d-flex justify-contents-center align-items-center">
                <h3 className={'text-center w-100'}>Welcome to Dashboard</h3>
            </div>
        )
    }
}
