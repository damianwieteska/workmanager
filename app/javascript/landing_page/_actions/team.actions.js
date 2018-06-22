import { teamConstants } from '../_constants';
import { teamService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const teamActions = {
    getForUser,
    leave
};

function getForUser(user_id) {
    return dispatch => {
        dispatch(request());

        teamService.getForUser(user_id)
            .then(
                teams => dispatch(success(teams)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: teamConstants.GETFORUSER_REQUEST } }
    function success(teams) { return { type: teamConstants.GETFORUSER_SUCCESS, teams } }
    function failure(error) { return { type: teamConstants.GETFORUSER_FAILURE, error } }
}

function leave(id, user_id) {
    return dispatch => {
        dispatch(request(id));

        teamService.leave(id, user_id)
            .then(
                team => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: teamConstants.LEAVE_REQUEST, id } }
    function success(id) { return { type: teamConstants.LEAVE_SUCCESS, id } }
    function failure(id, error) { return { type: teamConstants.LEAVE_FAILURE, id, error } }
}