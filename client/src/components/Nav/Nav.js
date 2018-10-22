import React from "react";
import logo from "../../pic/logo.png"
import "./Nav.css"
import { Link } from 'react-router-dom';

const Nav = ({ children }) => (
    <nav className="navbar justify-content-center">
        <a className="navbar-brand" href="#">
            <img src={logo} width="200" height="80" alt="ops" />
        </a>
        <ul className="nav ">
            <li className="nav-item">
                <a className="nav-link active" href="/active">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/link">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/features" >Features</a>
            </li>

        </ul>
    </nav>
);

export default Nav;

