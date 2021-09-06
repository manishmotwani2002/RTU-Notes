import React, { useContext, useState } from 'react';

import { Context as NotesContext } from '../context/notesContext';

const CommentBox = () => {
	const { submitComment } = useContext(NotesContext);

	const [comment, setComment] = useState('');

	return (
		<div className="flex justify-center items-center shadow-xl py-8 mx-6 my-20 bg-cyan-600 flex-col">
			<h1 className=" text-4xl md:text-5xl font-bold text-secondary mb-6 ">
				Comment Box
			</h1>
			<br />
			<textarea
				placeholder="Type Your Valuable Feedback here For our improvement"
				className="md:mx-0 resize w-80  md:w-1/2 h-40 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
				onChange={(event) => setComment(event.target.value)}></textarea>
			<div>
				<button
					className="bg-gray-200 hover:bg-blue-700 hover:text-white font-bold py-4 px-20 rounded mt-5"
					onClick={() => submitComment({ comment: comment })}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default CommentBox;
