import { projectConstants } from '../_constants';

export function projects(state = {}, action) {
  switch (action.type) {
    case projectConstants.GET_REQUEST:
      return {
        loading: true
      };
    case projectConstants.GET_SUCCESS:
      return {
        item: action.project
      };
    case projectConstants.GET_FAILURE:
      return {
        error: action.error
      };
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
    case projectConstants.LEAVE_REQUEST:
      // add 'deleting:true' property to project being deleted
      return {
        ...state, item: {...state.item, deleting: true }
      };
    case projectConstants.LEAVE_SUCCESS:
      // remove deleted project from state
      return {
        item: {}
      };
    case projectConstants.LEAVE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to project 
      return {
        ...state,
        item: {deleting, ...state.item, deleteError: action.error }
      };
 
   default:
      return state
  }
}
