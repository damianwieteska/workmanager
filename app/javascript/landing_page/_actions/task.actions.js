import { taskConstants } from '../_constants';
import { taskService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const taskActions = {
    get,
};

function get(project_id) {
    return dispatch => {
        dispatch(request());

        taskService.get(project_id)
            .then(
                tasks => dispatch(success(tasks)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: taskConstants.GET_REQUEST } }
    function success(tasks) { return { type: taskConstants.GET_SUCCESS, tasks } }
    function failure(error) { return { type: taskConstants.GET_FAILURE, error } }
}