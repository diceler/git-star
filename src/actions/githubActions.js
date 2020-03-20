import types from './githubActionTypes';
import axios from 'axios';

export function getRepos(page = 1) {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_STARRED_REPOS_NEXT_PAGE,
      page,
    });

    axios.get(`/search/repositories?q=stars:>1&s=stars&per_page=10&page=${page}`)
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
