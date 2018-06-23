import { taskConstants } from '../_constants';

export function tasks(state = {}, action) {
  switch (action.type) {
    case taskConstants.GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case taskConstants.GET_SUCCESS:
      return {
        items: {...state.items, [action.tasks.list_id]: action.tasks.tasks}
      };
    case taskConstants.GET_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case taskConstants.CREATE_REQUEST:
      return {
      // add 'deleting:true' property to task being deleted
        ...state,
        creating: true
      };
    case taskConstants.CREATE_SUCCESS:
      // remove deleted task from state
      return {
      	...state,
        items: {...state.items, [action.task.list_id]: state.items[action.task.list_id].concat(action.task)}
      };
    case taskConstants.CREATE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to task 
      return  {
      	...state,
        createError: action.error
      };
    case taskConstants.UPDATE_REQUEST:
      // add 'deleting:true' property to task being deleted
      return {
        ...state,
        items: {...state.items, [action.listId]: state.items[action.listId].filter(task => task.id !== action.task.id)}
      };
    case taskConstants.UPDATE_SUCCESS:
      // remove deleted task from state
      return {
      	items: {...state.items, [action.task.list_id]: ( state.items[action.task.list_id].concat(action.task) ).sort(function(a, b) {
            return parseInt(a.sort) > parseInt(b.sort);
        })}
      };
    case taskConstants.UPDATE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to task 
      return {
        ...state,
        items: state.items.map(task => {
          if (task.id === action.id) {
            // make copy of task without 'deleting:true' property
            const { deleting, ...taskCopy } = task;
            // return copy of task with 'deleteError:[error]' property
            return { ...taskCopy, deleteError: action.error };
          }
 
          return task;
        })
      };
    case taskConstants.DELETE_REQUEST:
      // add 'deleting:true' property to task being deleted
      return {
        ...state,
        items: state.items.map(task =>
          task.id === action.id
            ? { ...task, deleting: true }
            : task
        )
      };
    case taskConstants.DELETE_SUCCESS:
      // remove deleted task from state
      return {
        items: state.items.filter(task => task.id !== action.id)
      };
    case taskConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to task 
      return {
        ...state,
        items: state.items.map(task => {
          if (task.id === action.id) {
            // make copy of task without 'deleting:true' property
            const { deleting, ...taskCopy } = task;
            // return copy of task with 'deleteError:[error]' property
            return { ...taskCopy, deleteError: action.error };
          }
 
          return task;
        })
      };
   default:
      return state
  }
}
