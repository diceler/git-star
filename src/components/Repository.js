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

export default function Repository({isStarred, onStar, onUnstar, repo}) {
  return (
    <div key={repo.id} className="repo">
      <a href={repo.html_url}>
        {repo.full_name}
      </a>
      <button className="repo__star" onClick={isStarred ? onUnstar : onStar} value={repo.id}>
        <FontAwesomeIcon icon={isStarred ? fasStar : falStar} className="repo__icon"/>
      </button>
      <p>
        {repo.description}
      </p>
      <ul className="repo__meta">
        <li className="repo__info">
          <FontAwesomeIcon icon={fasStar} title="Starred" className="mr-1"/>
          {repo.stargazers_count}
        </li>
        <li className="repo__info">
          <FontAwesomeIcon icon={faCodeBranch} title="Forked" className="mr-1"/>
          {repo.forks_count}
        </li>
        <li className="repo__info">
          <FontAwesomeIcon icon={faBug} title={`${repo.open_issues_count} issues needs help`}
                           className="mr-1"/>
          {repo.open_issues_count}
        </li>
        {repo.language && (
          <li className="repo__info">
            <FontAwesomeIcon icon={faCode} title="Coding language" className="mr-1"/>
            {repo.language}
          </li>
        )}
        {repo.license && (
          <li className="repo__info">
            <FontAwesomeIcon icon={faFileSignature} title="License" className="mr-1"/>
            {repo.license.name}
          </li>
        )}
        <li className="repo__info">
          <FontAwesomeIcon icon={faHistory} title="Last update" className="mr-1"/>
          {new Date(repo.updated_at).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          })}
        </li>
      </ul>
    </div>
  );
}

Repository.propTypes = {
  isStarred: PropTypes.bool.isRequired,
  onStar: PropTypes.func.isRequired,
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
