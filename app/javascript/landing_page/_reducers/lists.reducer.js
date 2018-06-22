import { listConstants } from '../_constants';

export function lists(state = {}, action) {
  switch (action.type) {
    case listConstants.GET_REQUEST:
      return {
        loading: true
      };
    case listConstants.GET_SUCCESS:
      return {
        items: action.lists
      };
    case listConstants.GET_FAILURE:
      return {
        error: action.error
      };
   default:
      return state
  }
}
