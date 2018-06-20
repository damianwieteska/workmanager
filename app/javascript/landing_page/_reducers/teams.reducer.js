import { teamConstants } from '../_constants';

export function teams(state = {}, action) {
  switch (action.type) {
    case teamConstants.GETFORUSER_REQUEST:
      return {
        loading: true
      };
    case teamConstants.GETFORUSER_SUCCESS:
      return {
        items: action.teams
      };
    case teamConstants.GETFORUSER_FAILURE:
      return { 
        error: action.error
      };
   default:
      return state
  }
}