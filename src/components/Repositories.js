import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Repository from "./Repository";

export default function Repositories({onStar, onUnstar, repos, starred}) {
  const location = useLocation();
  const starredIds = starred.map((item) => item.id);

  function checkIfStarred(id) {
    return starredIds.indexOf(id) > -1;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container>
      <Row>
        <Col xs={{span: 12, offset: 0}} md={{span: 10, offset: 1}}>
          {repos.map((repo) => (
            <Repository
              key={repo.id}
              isStarred={checkIfStarred(repo.id)}
              onStar={onStar}
              onUnstar={onUnstar}
              repo={repo}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 text-center">
          <Button variant="outline-info">
            Load more
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

Repositories.propTypes = {
  onStar: PropTypes.func.isRequired,
  onUnstar: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  starred: PropTypes.arrayOf(PropTypes.object).isRequired,
};

