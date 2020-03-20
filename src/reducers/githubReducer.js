import find from 'lodash/find';
import reject from 'lodash/reject';
import types from '../actions/githubActionTypes';
import RepoCache from "../repoCache";

function addToStarred(state, id) {
  const alreadyExists = find(state.starred, {id});

  if (alreadyExists) {
    return state.starred;
  }

  const newStarredRepo = find(state.repos, {id});
  RepoCache.add(newStarredRepo);
  return [...state.starred, newStarredRepo]
}

function removeFromStarred(state, id) {
  RepoCache.remove(id);
  return reject(state.starred, {id});
}

const defaultState = {
  initCompleted: false,
  fetching: false,
  repos: [],
  page: 1,
  starred: RepoCache.getCache(),
};

export default function githubReducer(state = defaultState, action) {
  const {type} = action;

  switch (type) {
    case types.FETCH_STARRED_REPOS_NEXT_PAGE:
      return {
        ...state,
        fetching: true,
        page: action.page,
      };

    case types.RECEIVED_STARRED_REPOS:
      return {
        ...state,
        initCompleted: true,
        fetching: false,
        repos: [...state.repos, ...action.repos],
      };

    case types.STAR_REPO:
      return {
        ...state,
        starred: addToStarred(state, action.repoId),
      };

    case types.UNSTAR_REPO:
      return {
        ...state,
        starred: removeFromStarred(state, action.repoId),
      };

    default:
      return state;
  }
}
