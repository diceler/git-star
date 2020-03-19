import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as githubActions from './actions/githubActions';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Repositories from "./components/Repositories";
import Starred from "./components/Starred";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

function App({actions, initCompleted, repos, starred}) {
  useEffect(() => {
    if (!initCompleted) {
      actions.getRepos();
    }
  });

  return (
    <Router>
      <Navigation/>
      <Route path="/" exact>
        <Container>
          <Row>
            <Col>
              <div className="text-center mt-5 mb-5">
                <h3>
                  Find top starred repos of
                  <br/>
                  <FontAwesomeIcon icon={faGithub} className="mr-1"/>
                  GitHub here
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
        <Repositories repos={repos}/>
      </Route>
      <Route path="/starred" exact>
        <Container>
          <Row>
            <Col>
              <div className="text-center mt-5 mb-5">
                <h3>
                  Repos starred by you
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
        <Starred starred={starred}/>
      </Route>
    </Router>
  );
}

export default connect(
  (state) => ({
    ...state.github,
  }),
  (dispatch) => ({
    actions: bindActionCreators(githubActions, dispatch),
  })
)(App);
