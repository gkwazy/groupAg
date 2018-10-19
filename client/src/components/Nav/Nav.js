import React from "react";
import logo from "../../pic/logo.png"
import "./Nav.css"

const Nav = ({ children }) => (
    <nav className="navbar justify-content-center">
        <a className="navbar-brand" href="#">
            <img src={logo} width="200" height="80" alt="ops" />
        </a>
        <ul class="nav ">
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>

        </ul>
    </nav>
);

export default Nav;

