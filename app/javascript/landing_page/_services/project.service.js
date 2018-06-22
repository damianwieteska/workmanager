import { authHeader, axiosInstance } from '../_helpers';

export const projectService = {
    get,
    getForUser,
    getFinishedForUser,
    leave
};

const apiUrl = 'http://localhost:3000/api';

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/projects/${id}`, requestOptions).then(handleResponse);
}

function getForUser(user_id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/projects?user_id=${user_id}`, requestOptions).then(handleResponse);
}

function getFinishedForUser(user_id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/projects/finished?user_id=${user_id}`, requestOptions).then(handleResponse);
}

function leave(id, user_id) {
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader()
    };
 
    return fetch(`${apiUrl}/projects/${id}/leave?user_id=${user_id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }
        console.log(response);

        return data;
    });
}