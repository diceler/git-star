import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

export default function Navigation() {
  return (
    <Navbar variant="dark" bg="dark" fixed="top">
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faGithub} className="mr-1"/>
        GitStar
      </Link>
      <Nav>
        <Nav.Item>
          <NavLink to="/starred" className="nav-link" activeClassName="active">
            Starred by you
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
