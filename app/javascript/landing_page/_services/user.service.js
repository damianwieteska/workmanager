import { authHeader, axiosInstance } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    get,
    update
};

const apiUrl = 'http://localhost:3000/api';

function login(email, password) {
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
 
    return fetch(`${apiUrl}/users/sign_in`, requestOptions)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.data) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        }).then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    console.log(requestOptions.body);
 
    return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({user: user})
    };

    return fetch(`${apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
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