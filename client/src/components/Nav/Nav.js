import React from "react";
import logo from "../../pic/logo.png"

const Nav = ({ children }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
            <img src={logo} width="200" height="80" alt="ops" />
        </a>
    </nav>
);

export default Nav;
