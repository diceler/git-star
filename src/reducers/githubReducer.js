import find from 'lodash/find';
import reject from 'lodash/reject';
import types from '../actions/githubActionTypes';

const defaultState = {
  initCompleted: false,
  repos: [],
  starred: [],
};

function ensureNoDuplicates(state, id) {
  const alreadyExists = find(state.starred, {id});

  if (alreadyExists) {
    return state.starred;
  }

  return [...state.starred, find(state.repos, {id})]
}

export default function githubReducer(state = defaultState, action) {
  const {type} = action;

  switch (type) {
    case types.RECEIVED_STARRED_REPOS:
      return {...state, initCompleted: true, repos: action.repos};

    case types.STAR_REPO:
      return {...state, starred: ensureNoDuplicates(state, action.repoId)};

    case types.UNSTAR_REPO:
      return {...state, starred: reject(state.starred, {id: action.repoId})};

    default:
      return state;
  }
}
