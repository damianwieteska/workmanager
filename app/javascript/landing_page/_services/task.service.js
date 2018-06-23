import { authHeader, axiosInstance } from '../_helpers';

export const taskService = {
    get,
    create,
    update,
    delete: _delete
};

const apiUrl = 'http://localhost:3000/api';

function get(project_id, listId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/projects/${project_id}/lists/${listId}/tasks`, requestOptions).then(handleResponse);
}

function create(task) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({task: task})
    };

    return fetch(`${apiUrl}/projects/${task.project_id}/lists/${task.list_id}/tasks`, requestOptions).then(handleResponse);;
}

function update(task, listId) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({task: task})
    };

    return fetch(`${apiUrl}/projects/${task.project_id}/lists/${listId}/tasks/${task.id}`, requestOptions).then(handleResponse);;
}


// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(projectId, listId, id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
 
    return fetch(`${apiUrl}/projects/${projectId}/lists/${listId}/tasks/${id}`, requestOptions).then(handleResponse);
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