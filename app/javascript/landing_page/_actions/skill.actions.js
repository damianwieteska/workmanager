import { skillConstants } from '../_constants';
import { skillService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const skillActions = {
    getForUser
};

function getForUser(user_id) {
    return dispatch => {
        dispatch(request());

        skillService.getForUser(user_id)
            .then(
                skills => dispatch(success(skills)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: skillConstants.GETFORUSER_REQUEST } }
    function success(skills) { return { type: skillConstants.GETFORUSER_SUCCESS, skills } }
    function failure(error) { return { type: skillConstants.GETFORUSER_FAILURE, error } }
}

