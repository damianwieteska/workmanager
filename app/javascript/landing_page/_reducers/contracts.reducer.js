import { contractConstants } from '../_constants';

export function contracts(state = {}, action) {
  switch (action.type) {
    case contractConstants.GETFORUSER_REQUEST:
      return {
        loading: true
      };
    case contractConstants.GETFORUSER_SUCCESS:
      return {
        items: action.contracts
      };
    case contractConstants.GETFORUSER_FAILURE:
      return { 
        error: action.error
      };
   default:
      return state
  }
}