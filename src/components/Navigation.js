import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faThList, faStar} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <Navbar variant="light" bg="light" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faGithub} className="mr-1"/>
          GitStar
        </Link>
        <Nav>
          <Nav.Item>
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              <FontAwesomeIcon icon={faThList} className="mr-1"/>
              <span className="d-none d-sm-inline">Repositories</span>
              <span className="d-sm-none">Repos</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/starred" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faStar} className="mr-1"/>
              <span className="d-none d-sm-inline">Starred by you</span>
              <span className="d-sm-none">Starred</span>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
