import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";

export default function Repositories({repos}) {
  if (repos.length === 0) {
    return null;
  }

  return (
    <Container>
      <Row>
        <Col xs={{span: 12, offset: 0}} md={{span: 10, offset: 1}}>
          {repos.map((repo) => (
            <Row className="mt-1">
              <Col>
                <a href={repo.html_url}>
                  {repo.full_name}
                </a>
              </Col>
              <Col bsPrefix="col-auto ml-auto">
                <Button variant="outline-success">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </Button>
              </Col>
            </Row>
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
