import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {

    render() {
        return(
            // <nav className="navbar navbar-dark db-dark navbar-expand-lg">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="nav-link nav-title">ExcerTracker</Link>
                <div className="collpase navbar-collpase" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Exercise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create Exercise log</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}