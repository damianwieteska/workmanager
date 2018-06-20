import { projectConstants } from '../_constants';

export function projects(state = {}, action) {
  switch (action.type) {
    case projectConstants.GETFORUSER_REQUEST:
      return {
        loading: true
      };
    case projectConstants.GETFORUSER_SUCCESS:
      return {
        items: action.projects
      };
    case projectConstants.GETFORUSER_FAILURE:
      return {
        error: action.error
      };
    case projectConstants.GETFINISHEDFORUSER_REQUEST:
      return {
        loading: true
      };
    case projectConstants.GETFINISHEDFORUSER_SUCCESS:
      return {
        items: action.projects
      };
    case projectConstants.GETFINISHEDFORUSER_FAILURE:
      return {
        error: action.error
      };
   default:
      return state
  }
}