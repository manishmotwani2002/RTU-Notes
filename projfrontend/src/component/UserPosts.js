import React, { useContext, useEffect } from 'react';
import { Context as NotesContext } from '../context/notesContext';
import Card from './Card';

const UserPosts = () => {
	const { getUserNotes, state } = useContext(NotesContext);

	useEffect(() => {
		getUserNotes();
	}, []);

	return (
		<div className="mt-20 bg-gray-50">
			<h1 className="mt-6 text-4xl md:text-5xl font-bold text-secondary underline mb-6 py-8">
				<center>Your Posts</center>
			</h1>
			<div className="">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{state.profileArray.map((post, index) => {
						return (
							<div key={index} className="  ">
								<Card post={post} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default UserPosts;
