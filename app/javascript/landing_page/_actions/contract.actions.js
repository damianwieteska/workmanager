import { contractConstants } from '../_constants';
import { contractService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const contractActions = {
    getForUser
};

function getForUser(user_id) {
    return dispatch => {
        dispatch(request());

        contractService.getForUser(user_id)
            .then(
                contracts => dispatch(success(contracts)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: contractConstants.GETFORUSER_REQUEST } }
    function success(contracts) { return { type: contractConstants.GETFORUSER_SUCCESS, contracts } }
    function failure(error) { return { type: contractConstants.GETFORUSER_FAILURE, error } }
}

