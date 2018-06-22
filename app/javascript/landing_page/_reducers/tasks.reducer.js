import { taskConstants } from '../_constants';

export function tasks(state = {}, action) {
  switch (action.type) {
    case taskConstants.GET_REQUEST:
      return {
        loading: true
      };
    case taskConstants.GET_SUCCESS:
      return {
        items: action.tasks
      };
    case taskConstants.GET_FAILURE:
      return {
        error: action.error
      };
   default:
      return state
  }
}
