import { projectConstants } from '../_constants';
import { projectService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const projectActions = {
	get,
    getForUser,
    getFinishedForUser,
    leave
};

function get(id) {
    return dispatch => {
        dispatch(request());

        projectService.get(id)
            .then(
                project => dispatch(success(project)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: projectConstants.GET_REQUEST } }
    function success(project) { return { type: projectConstants.GET_SUCCESS, project } }
    function failure(error) { return { type: projectConstants.GET_FAILURE, error } }
}

function getForUser(user_id) {
    return dispatch => {
        dispatch(request());

        projectService.getForUser(user_id)
            .then(
                projects => dispatch(success(projects)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: projectConstants.GETFORUSER_REQUEST } }
    function success(projects) { return { type: projectConstants.GETFORUSER_SUCCESS, projects } }
    function failure(error) { return { type: projectConstants.GETFORUSER_FAILURE, error } }
}

function getFinishedForUser(user_id) {
    return dispatch => {
        dispatch(request());

        projectService.getFinishedForUser(user_id)
            .then(
                projects => dispatch(success(projects)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: projectConstants.GETFINISHEDFORUSER_REQUEST } }
    function success(projects) { return { type: projectConstants.GETFINISHEDFORUSER_SUCCESS, projects } }
    function failure(error) { return { type: projectConstants.GETFINISHEDFORUSER_FAILURE, error } }
}

function leave(id, user_id) {
    return dispatch => {
        dispatch(request(id));

        projectService.leave(id, user_id)
            .then(
                project => {
                  history.push('/dashboard');
                  dispatch(success(id));
                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: projectConstants.LEAVE_REQUEST, id } }
    function success(id) { return { type: projectConstants.LEAVE_SUCCESS, id } }
    function failure(id, error) { return { type: projectConstants.LEAVE_FAILURE, id, error } }
}
