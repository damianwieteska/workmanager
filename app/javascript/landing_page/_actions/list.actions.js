import { listConstants } from '../_constants';
import { listService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const listActions = {
    get,
    create,
    update,
    delete: _delete
};

function get(project_id) {
    return dispatch => {
        dispatch(request());

        listService.get(project_id)
            .then(
                lists => dispatch(success(lists)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: listConstants.GET_REQUEST } }
    function success(lists) { return { type: listConstants.GET_SUCCESS, lists } }
    function failure(error) { return { type: listConstants.GET_FAILURE, error } }
}

function create(list, projectId) {
    return dispatch => {
        dispatch(request());

        listService.create(list, projectId)
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: listConstants.CREATE_REQUEST } }
    function success(list) { return { type: listConstants.CREATE_SUCCESS, list } }
    function failure(error) { return { type: listConstants.CREATE_FAILURE, error } }
}

function update(list) {
    return dispatch => {
        dispatch(request());

        listService.update(list)
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: listConstants.UPDATE_REQUEST } }
    function success(list) { return { type: listConstants.UPDATE_SUCCESS, list } }
    function failure(error) { return { type: listConstants.UPDATE_FAILURE, error } }
}

function _delete(id, projectId) {
    return dispatch => {
        dispatch(request(id));
 
        listService.delete(id, projectId)
            .then(
                list => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };
 
    function request(id) { return { type: listConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: listConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: listConstants.DELETE_FAILURE, id, error } }
}
