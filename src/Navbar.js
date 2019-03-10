import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({users, things}) => {

    return (
        <nav>
            <ul className="nav nav-pills">
                <li>
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/users">
                        Users {users}
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/things">
                        Things {things}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
