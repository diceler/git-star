import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Starred({starred}) {
  return (
    <Container>
      <Row>
        <Col>
          {starred.map((repo) => (
            <div key={repo.id}>
              <h2>{repo.full_name}</h2>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
