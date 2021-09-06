import React, { useContext } from 'react';
import { Context as NoteContext } from '../context/notesContext';
import { useParams } from 'react-router-dom';
import Card from './Card';

const AdminProfile = () => {
	const params = useParams();
	const { AllNotes, state } = useContext(NoteContext);

	return (
		<div className="mt-20">
			<h1 className=" text-2xl text-center md:text-3xl">Hello to Admin Panel</h1>
			<button
				className="text-center md:text-2xl text-xl"
				onClick={(event) => {
					event.preventDefault();
					AllNotes({ userId: params.userId });
				}}>
				Click Here to View all Notes
			</button>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{state.adminArray.map((post, index) => {
					console.log('lavesh', post, state.adminArray.length);
					return (
						<div key={index}>
							<Card post={post} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AdminProfile;
