import { AUTH_USER, AUTH_ERROR, SECRET } from './types';


export const signup = (formProps, redirectCallback) => async dispatch => {
    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formProps),

        });
        const data = await response;
        if (!data.ok) {
            throw Error(data.statusText);
        }

        const json = await data.json();
        console.log(json);

        dispatch({ type: AUTH_USER, payload: json.token });
        localStorage.setItem('token', json.token);
        redirectCallback();
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: 'Email is in use' });
    }


}

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
}

export const signin = (formProps, redirectCallback) => async dispatch => {
    try {
        const response = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formProps),

        });
        const data = await response;
        if (!data.ok) {
            throw Error(data.statusText);
        }

        const json = await data.json();
        console.log(json);

        dispatch({ type: AUTH_USER, payload: json.token });
        localStorage.setItem('token', json.token);
        redirectCallback();
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: 'Wrong Email or Password' });
    }
}

export const secretAction = token => async dispatch => {
    try {
        const response = await fetch('http://localhost:5000/secret', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token

            }
        });
        const res = await response;
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const data = await res.json();
        console.log('secret action ', data.secret)
        dispatch({ type: SECRET, payload: data.secret });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: 'Resource not found or premission denied' });
    }
}