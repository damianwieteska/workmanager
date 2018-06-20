import { authHeader } from '../_helpers';

export const contractService = {
    getForUser
};

const apiUrl = 'http://localhost:3000/api';

function getForUser(user_id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/contracts?user_id=${user_id}`, requestOptions).then(handleResponse);
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