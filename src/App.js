import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/starred" exact>
        <Container>
          <Row>
            <Col>
              <h1>Starred by you</h1>
            </Col>
          </Row>
        </Container>
      </Route>
    </Router>
  );
}
