import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    get,
    update,
    getAll
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/dashboard');
                    dispatch(alertActions.success('Signed in successfully.'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register({...user, confirm_success_url: '', provider: 'email', uid: user.email })
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function get(id) {
    return dispatch => {
        dispatch(request(id));

        userService.get(id)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error))
            );
    };

    function request(id) { return { type: userConstants.GET_REQUEST, id } }
    function success(user) { return { type: userConstants.GET_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function update(user, current_user) {
    return dispatch => {
        dispatch(request(user.id));

        userService.update(user)
            .then(
                user => {
                    dispatch(success(user));
                    if(current_user.id == user.id) {
                        dispatch(successLogin({ data: user }));
                    }
                    history.push('/dashboard');
                },
                error => {
                	dispatch(failure(error));
                }
            );
    };

    function request(id) { return { type: userConstants.UPDATE_REQUEST, id } }
    function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }
    function successLogin(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
}