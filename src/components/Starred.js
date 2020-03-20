import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {useLocation} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Repository from "./Repository";

export default function Starred({onUnstar, starred}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (starred.length === 0) {
    return (
      <Container className="mt-3">
        <Row>
          <Col className="text-center font-italic text-muted">
            You haven't starred anything yet.
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs={{span: 12, offset: 0}} md={{span: 10, offset: 1}}>
          {starred.map((repo) => (
            <Repository
              key={repo.id}
              isStarred
              onUnstar={onUnstar}
              repo={repo}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

Starred.propTypes = {
  onUnstar: PropTypes.func.isRequired,
  starred: PropTypes.arrayOf(PropTypes.object).isRequired,
};
