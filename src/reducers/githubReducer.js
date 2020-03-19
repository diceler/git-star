import types from '../actions/githubActionTypes';

const defaultState = {
  initCompleted: false,
  repos: [],
  starred: [],
};

export default function githubReducer(state = defaultState, action) {
  const {type} = action;

  switch (type) {
    case types.RECEIVED_STARRED_REPOS:
      return {...state, initCompleted: true, repos: action.repos};

    default:
      return state;
  }
}
