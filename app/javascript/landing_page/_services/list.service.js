import { authHeader, axiosInstance } from '../_helpers';

export const listService = {
    get,
    create,
    update,
    delete: _delete
};

const apiUrl = 'http://localhost:3000/api';

function get(projectId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/projects/${projectId}/lists`, requestOptions).then(handleResponse);
}

function create(list, projectId) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({list: list})
    };

    return fetch(`${apiUrl}/projects/${projectId}/lists`, requestOptions).then(handleResponse);;
}

function update(list) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({list: list})
    };

    return fetch(`${apiUrl}/projects/${list.project_id}/lists/${list.id}`, requestOptions).then(handleResponse);;
}


// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id, projectId) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
 
    return fetch(`${apiUrl}/projects/${projectId}/lists/${id}`, requestOptions).then(handleResponse);
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