import types from './githubActionTypes';
import axios from 'axios';

export function getRepos() {
  return (dispatch) => {
    axios.get('/search/repositories?q=stars:>1&s=stars&per_page=20')
      .then((response) => {
        dispatch({
          type: types.RECEIVED_STARRED_REPOS,
          repos: response.data.items,
        });
      })
  }
}

export function starRepo({target: {value}}) {
  const repoId = parseInt(value, 10);

  return {
    type: types.STAR_REPO,
    repoId,
  }
}

export function unstarRepo({target: {value}}) {
  const repoId = parseInt(value, 10);

  return {
    type: types.UNSTAR_REPO,
    repoId,
  }
}
