import api from '../api/notes-api';
import createDataContext from './createDataContext';

const notesReducer = (state, action) => {
	switch (action.type) {
		case 'filter':
			return { ...state, postArray: action.payload };
		case 'getPost':
			return { ...state, profileArray: action.payload };
		case 'admin':
			return { ...state, adminArray: action.payload };
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
		var sem = parseInt(semester);
		console.log(title, description, content, sem, branch, subject, userId);
		const response = await api
			.post(`/post/create/${userId}`, {
				title: title,
				description: description,
				content: content,
				semester: sem,
				branch: branch,
				subject: subject,
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(response);
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

export const { Context, Provider } = createDataContext(
	notesReducer,
	{ createNotes, filterNotes, getUserNotes, removeNotes, AllNotes },
	{ errorMessage: '', postArray: [], profileArray: [], adminArray: [] }
);
