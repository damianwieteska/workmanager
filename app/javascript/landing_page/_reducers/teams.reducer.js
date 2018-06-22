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
    case teamConstants.LEAVE_REQUEST:
      // add 'deleting:true' property to team being deleted
      return {
        ...state,
        items: state.items.map(team =>
          team.id === action.id
            ? { ...team, deleting: true }
            : team
        )
      };
    case teamConstants.LEAVE_SUCCESS:
      // remove deleted team from state
      return {
        items: state.items.filter(team => team.id !== action.id)
      };
    case teamConstants.LEAVE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to team 
      return {
        ...state,
        items: state.items.map(team => {
          if (team.id === action.id) {
            // make copy of team without 'deleting:true' property
            const { deleting, ...teamCopy } = team;
            // return copy of team with 'deleteError:[error]' property
            return { ...teamCopy, deleteError: action.error };
          }
 
          return team;
        })
      };
   default:
      return state
  }
}