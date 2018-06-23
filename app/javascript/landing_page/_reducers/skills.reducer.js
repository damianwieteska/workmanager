import { skillConstants } from '../_constants';

export function skills(state = {}, action) {
  switch (action.type) {
    case skillConstants.GETFORUSER_REQUEST:
      return {
        loading: true
      };
    case skillConstants.GETFORUSER_SUCCESS:
      return {
        items: action.skills
      };
    case skillConstants.GETFORUSER_FAILURE:
      return { 
        error: action.error
      };
    case skillConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case skillConstants.GETALL_SUCCESS:
      return {
        items: action.skills
      };
    case skillConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
   default:
      return state
  }
}