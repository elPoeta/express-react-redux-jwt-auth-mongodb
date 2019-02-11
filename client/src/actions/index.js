import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = formProps => async dispatch => {
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
        dispatch({ type: AUTH_USER, payload: json });

    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error });
    }


}

