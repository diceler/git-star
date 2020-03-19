import types from './githubActionTypes';
import axios from 'axios';

export function getRepos() {
  return (dispatch) => {
    axios.get('/search/repositories?q=stars:>1&s=stars&per_page=10')
      .then((response) => {
        dispatch({
          type: types.RECEIVED_STARRED_REPOS,
          repos: response.data.items,
        });
      })
  }
}
