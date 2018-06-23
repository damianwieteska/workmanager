import { taskConstants } from '../_constants';
import { taskService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const taskActions = {
    get,
    create,
    update,
    delete: _delete
};

function get(list) {
    return dispatch => {
        dispatch(request());

        taskService.get(list.project_id, list.id)
            .then(
                tasks => dispatch(success(tasks)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: taskConstants.GET_REQUEST } }
    function success(tasks) { return { type: taskConstants.GET_SUCCESS, tasks } }
    function failure(error) { return { type: taskConstants.GET_FAILURE, error } }
}

function create(task) {
    return dispatch => {
        dispatch(request());

        taskService.create(task)
            .then(
                task => dispatch(success(task)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: taskConstants.CREATE_REQUEST } }
    function success(task) { return { type: taskConstants.CREATE_SUCCESS, task } }
    function failure(error) { return { type: taskConstants.CREATE_FAILURE, error } }
}

function update(task, listId) {
    return dispatch => {
        dispatch(request(task, listId));

        taskService.update(task, listId)
            .then(
                task => dispatch(success(task)),
                error => dispatch(failure(error))
            );
    };

    function request(task, listId) { return { type: taskConstants.UPDATE_REQUEST, task, listId } }
    function success(task) { return { type: taskConstants.UPDATE_SUCCESS, task } }
    function failure(error) { return { type: taskConstants.UPDATE_FAILURE, error } }
}

function _delete(projectId, listId, id) {
    return dispatch => {
        dispatch(request(id));
 
        taskService.delete(projectId, listId, id)
            .then(
                task => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };
 
    function request(id) { return { type: taskConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: taskConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: taskConstants.DELETE_FAILURE, id, error } }
}
