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
    case listConstants.CREATE_REQUEST:
      return {
      // add 'deleting:true' property to list being deleted
        ...state,
        creating: true
      };
    case listConstants.CREATE_SUCCESS:
      // remove deleted list from state
      return {
      	...state,
        items: state.items.concat(action.list)
      };
    case listConstants.CREATE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to list 
      return  {
      	...state,
        createError: action.error
      };
    case listConstants.UPDATE_REQUEST:
      // add 'deleting:true' property to list being deleted
      return {
        ...state,
        items: state.items.map(list =>
          list.id === action.id
            ? { ...list, updating: true }
            : list
        )
      };
    case listConstants.UPDATE_SUCCESS:
      // remove deleted list from state
      return {
        items: state.items.filter(list => list.id !== action.list.id).concat(action.list)
      };
    case listConstants.UPDATE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to list 
      return {
        ...state,
        items: state.items.map(list => {
          if (list.id === action.id) {
            // make copy of list without 'deleting:true' property
            const { deleting, ...listCopy } = list;
            // return copy of list with 'deleteError:[error]' property
            return { ...listCopy, deleteError: action.error };
          }
 
          return list;
        })
      };
    case listConstants.DELETE_REQUEST:
      // add 'deleting:true' property to list being deleted
      return {
        ...state,
        items: state.items.map(list =>
          list.id === action.id
            ? { ...list, deleting: true }
            : list
        )
      };
    case listConstants.DELETE_SUCCESS:
      // remove deleted list from state
      return {
        items: state.items.filter(list => list.id !== action.id)
      };
    case listConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to list 
      return {
        ...state,
        items: state.items.map(list => {
          if (list.id === action.id) {
            // make copy of list without 'deleting:true' property
            const { deleting, ...listCopy } = list;
            // return copy of list with 'deleteError:[error]' property
            return { ...listCopy, deleteError: action.error };
          }
 
          return list;
        })
      };
   default:
      return state
  }
}
