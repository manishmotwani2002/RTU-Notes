import api from '../api/notes-api';

import createDataContext from './createDataContext';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'error_handling_signup':
			return { ...state, errorMessageSignup: action.payload };
		case 'error_handling_signin':
			return { ...state, errorMessageSignin: action.payload };
		case 'signup':
			return {
				...state,
				token: action.payload,
				errorMessage: '',
				didRedirect: true,
			};
		case 'signin': {
			return {
				...state,
				token: action.payload,
				errorMessage: '',
				didRedirect: true,
			};
		}
		case 'signout': {
			return { ...state, token: '', errorMessage: '', didRedirect: true };
		}
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return ({ name, lastname, email, password }) => {
		console.log('Manish sir');
		console.log(name, lastname, email, password);

		api
			.post('/signup', {
				name,
				lastname,
				email,
				password,
			})
			.then(function (response) {
				console.log(response.data);
				if (response.data.token) {
					localStorage.setItem('token', response.data.token);
					localStorage.setItem('user', response.data.id);
					localStorage.setItem('role', response.data.role);
					localStorage.setItem('email', response.data.email);
					localStorage.setItem('name', response.data.name);
					localStorage.setItem('lastname', response.data.lastname);
				}

				dispatch({ type: 'signup', payload: response.data.token });
			})
			.catch(function (error) {
				console.log(error.response);
				dispatch({
					type: 'error_handling_signup',
					payload: error.response.data.error,
				});
			});
	};
};
const signin = (dispatch) => {
	return async ({ email, password }) => {
		api
			.post('/signin', { email, password })
			.then(function (response) {
				console.log('token', response.data);
				if (response.data.token) {
					console.log(response.data);
					localStorage.setItem('token', response.data.token);
					localStorage.setItem('user', response.data.user._id);
					localStorage.setItem('role', response.data.user.role);
					localStorage.setItem('email', response.data.user.email);
					localStorage.setItem('name', response.data.user.name);
					localStorage.setItem('lastname', response.data.user.lastname);
				}
				dispatch({ type: 'signin', payload: response.data.token });
			})
			.catch(function (error) {
				console.log(error.response);
				dispatch({
					type: 'error_handling_signin',
					payload: error.response.data.error,
				});
			});
	};
};

const signout = (dispatch) => {
	return async () => {
		console.log('test');
		await localStorage.removeItem('token');

		dispatch({ type: 'signout' });
	};
};

const isAuthenticated = () => {
	return () => {
		if (localStorage.getItem('token')) {
			localStorage.getItem('token');
		} else {
			return false;
		}
	};
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout, isAuthenticated },
	{
		token: null,
		errorMessageSignup: '',
		errorMessageSignin: '',
		didRedirect: false,
	}
);
