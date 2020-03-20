import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as falStar} from "@fortawesome/free-regular-svg-icons";
import {
  faBug,
  faCode,
  faCodeBranch,
  faFileSignature,
  faHistory,
  faStar as fasStar
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Repository({isStarred, onStar, onUnstar, repo}) {
  return (
    <div key={repo.id} className="repo bg-light">
      <Row noGutters className="align-content-center">
        <Col xs={10} md="auto">
          <a className="repo__name" href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.full_name}
          </a>
        </Col>
        <Col bsPrefix="col-auto ml-auto">
          <Button
            variant={isStarred ? 'success' : 'secondary'}
            size="sm"
            className="repo__star"
            onClick={isStarred ? onUnstar : onStar}
            value={repo.id}
          >
            <FontAwesomeIcon icon={isStarred ? fasStar : falStar} className="u-disable-pointer-event"/>
            <span className="d-none d-sm-inline ml-1 u-disable-pointer-event">
              {isStarred ? 'Starred' : 'Star'}
            </span>
          </Button>
        </Col>
      </Row>
      <p>
        {repo.description}
      </p>
      <Row noGutters>
        <Col bsPrefix="col-auto" className="repo__info text-muted">
          <FontAwesomeIcon icon={fasStar} title="Starred" className="mr-1"/>
          {repo.stargazers_count}
        </Col>
        <Col bsPrefix="col-auto" className="repo__info text-muted">
          <FontAwesomeIcon icon={faCodeBranch} title="Forked" className="mr-1"/>
          {repo.forks_count}
        </Col>
        <Col bsPrefix="col-auto" className="repo__info text-muted">
          <FontAwesomeIcon icon={faBug} title={`${repo.open_issues_count} issues need help`}
                           className="mr-1"/>
          {repo.open_issues_count}
        </Col>
        {repo.language && (
          <Col bsPrefix="col-auto" className="repo__info text-muted">
            <FontAwesomeIcon icon={faCode} title="Coding language" className="mr-1"/>
            {repo.language}
          </Col>
        )}
        {repo.license && (
          <Col bsPrefix="col-auto" className="repo__info text-muted">
            <FontAwesomeIcon icon={faFileSignature} title="License" className="mr-1"/>
            {repo.license.name}
          </Col>
        )}
        <Col bsPrefix="col-auto" className="repo__info text-muted">
          <FontAwesomeIcon icon={faHistory} title="Last update" className="mr-1"/>
          {new Date(repo.updated_at).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          })}
        </Col>
      </Row>
    </div>
  );
}

Repository.propTypes = {
  isStarred: PropTypes.bool.isRequired,
  onStar: PropTypes.func,
  onUnstar: PropTypes.func.isRequired,
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    forks_count: PropTypes.number.isRequired,
    open_issues_count: PropTypes.number.isRequired,
    language: PropTypes.string,
    license: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
};
