import { projectConstants } from '../_constants';
import { projectService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const projectActions = {
    getForUser,
    getFinishedForUser
};

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
