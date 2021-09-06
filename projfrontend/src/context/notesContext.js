import api from '../api/notes-api';
import { API } from '../backend';
import createDataContext from './createDataContext';

const notesReducer = (state, action) => {
	switch (action.type) {
		case 'filter':
			return { ...state, postArray: action.payload };
		case 'getPost':
			return { ...state, profileArray: action.payload };
		case 'admin':
			return { ...state, adminArray: action.payload };
		case 'search':
			return { ...state, searchArray: action.payload };
		default:
			return state;
	}
};

const createNotes = (dispatch) => {
	return async ({
		title,
		description,
		content,
		semester,
		branch,
		subject,
		userId,
	}) => {
		console.log('manish');

		console.log(title, description, content, semester, branch, subject, userId);
		const token = localStorage.getItem('token');
		await api
			.post(`${API}/post/create/${userId}`, {
				title,
				description,
				semester,
				subject,
				branch,
				content,
			})
			.then(function (response) {
				console.log(response);
				console.log('check');
				alert('Your post is uploaded successfully');
				window.location.reload();
			})
			.catch(function (err) {
				console.log(err);
			});
	};
};

const AllNotes = (dispatch) => {
	return async ({ userId }) => {
		const response = await api.get(`/posts/all/${userId}`).catch((err) => {
			console.log(err);
		});
		console.log(response.data);
		dispatch({ type: 'admin', payload: response.data });
	};
};

const filterNotes = (dispatch) => {
	return async ({ branch, semester, subject }) => {
		console.log('filter check');
		console.log(branch, semester, subject);

		await api
			.post('/posts/filter', { branch, semester, subject })
			.then(function (response) {
				console.log(response.data);
				dispatch({ type: 'filter', payload: response.data });
				//response.data
			})
			.catch(function (err) {
				console.log(err);
			});
	};
};

const getUserNotes = (dispatch) => {
	return () => {
		const id = localStorage.getItem('user');
		// console.log('ID', id);
		api
			.get(`/posts/user/${id}`)
			.then(function (response) {
				console.log(response);
				dispatch({ type: 'getPost', payload: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

const removeNotes = (dispatch) => {
	return ({ postId }) => {
		// console.log('check');

		const userId = localStorage.getItem('user');

		// post/delete/:userId/:postId
		api
			.delete(`/post/delete/${userId}/${postId}`)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (err) {
				console.log(err);
			});
	};
};

const searchNotes = (dispatch) => {
	return async ({ searchedValue }) => {
		console.log(searchedValue);
		await api
			.get(`/searchtest/${searchedValue}`)
			.then((response) => {
				dispatch({ type: 'search', payload: response.data });
				console.log(response.data);
			})
			.catch((err) => console.log(err));
	};
};

const submitComment = (dispatch) => {
	return async ({ comment }) => {
		console.log('comment', comment);

		api
			.post('/comment', { content: comment })
			.then((response) => {
				console.log('res', response);
				alert('comment saved successfully!!');
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const { Context, Provider } = createDataContext(
	notesReducer,
	{
		searchNotes,
		createNotes,
		filterNotes,
		getUserNotes,
		removeNotes,
		AllNotes,
		submitComment,
	},
	{
		errorMessage: '',
		postArray: [],
		profileArray: [],
		adminArray: [],
		searchArray: [],
	}
);
