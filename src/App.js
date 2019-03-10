import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Users from './Users'
import Things from './things'
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
        axios.get('/api/things')
        .then(response => response.data)
        .then(things => this.setState({things}))
        .then(() => axios.get('/api/users'))
        .then(response => response.data)
        .then(users => this.setState({users}))
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
