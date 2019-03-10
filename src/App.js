import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Users from './Users'
import Things from './Things'
import Navbar from './Navbar'
import axios from 'axios'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            things: [],
            users: []
        }
    }

    componentDidMount() {
        axios.all([
            axios.get('/api/things'),
            axios.get('/api/users')
        ])
        .then(([thingsResponse, usersResponse]) =>  [thingsResponse.data, usersResponse.data])
        .then(([things, users]) => this.setState({things, users}))
    }

    render () {
        const {things, users} = this.state;
        return (
            <HashRouter>
                <div id="main">
                    <div className="column container">
                        <div id="header">
                            <h1>Acme Favorites</h1>
                        </div>
                        <Navbar users={users.length} things={things.length} />
                    </div>
                    <Route exact path="/"  render={(() => <Redirect to="/users" />)} />
                    <Route exact path="/users" render={() => <Users users={users} />} />
                    <Route exact path="/things" render={() => <Things things={things} />} />
                </div>
            </HashRouter>
        )
    }
}
