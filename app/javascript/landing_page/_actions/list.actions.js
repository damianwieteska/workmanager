import { listConstants } from '../_constants';
import { listService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const listActions = {
    get,
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