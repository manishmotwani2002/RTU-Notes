import React, { useContext, useEffect } from 'react';

import { Context as NotesContext } from '../context/notesContext';

import './Card.css';
const Card = (props) => {
	const post = props.post;
	console.log('post', post);

	const postId = post._id;

	const { removeNotes } = useContext(NotesContext);

	return (
		<div class="card text-center Fragment">
			<h1>{post.title}</h1>
			<div class="card-body">
				<h5 class="card-title">Author : {post.userName}</h5>
				<hr />
				<p class="tab">Semester: {post.semester}</p>
				<p class="card-text">Subject: {post.subject}</p>
				<p class="card-text">Branch: {post.branch}</p>
				<hr />
				<a href="#" class="btn btn-primary">
					{post.content}
				</a>
			</div>
			{/* <div class="card-footer text-muted">RTU TOAD</div> */}
			{(post.user == localStorage.getItem('user') ||
				localStorage.getItem('role') == 1) && (
				<button className="bg-danger" onClick={() => removeNotes({ postId })}>
					remove
				</button>
			)}
		</div>
	);
};

export default Card;
