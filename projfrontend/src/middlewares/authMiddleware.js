import { Redirect } from 'react-router';
export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}
	if (localStorage.getItem('token')) {
		return localStorage.getItem('token');
	} else {
		return false;
	}
};

export const signout = () => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('role');
		localStorage.removeItem('email');
		localStorage.removeItem('name');
		localStorage.removeItem('lastname');

		<Redirect to="/" />;
	}
};
