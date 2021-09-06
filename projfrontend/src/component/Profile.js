import React, { useState, useContext } from 'react';
// import './profile.css';
import { Context as NotesContext } from '../context/notesContext';
import PostForm from './PostForm';
// import classes from './pro.css';
import { Redirect, NavLink } from 'react-router-dom';

const Profile = () => {
	const { getUserNotes, state } = useContext(NotesContext);
	// console.log(state.profileArray);
	const [isFillForm, setIsFillForm] = useState(false);
	const [loadPost, setLoadPost] = useState(false);

	const startFillForm = () => {
		setIsFillForm(true);
	};
	const NotesPosted = () => {
		setIsFillForm(false);
	};

	const showUserPost = () => {
		setLoadPost(true);
	};

	const userId = localStorage.getItem('user');
	// console.log(userId);

	const routeRedirect = () => {
		return <Redirect to={`/user/post/${userId}`} />;
	};

	return (
		<div className="mt-24 text-gray-800">
			<div className=" ">
				<div className="grid grid-cols-5 mb-8">
					<div className=" col-start-2 col-span-3 grid grid-cols-3 py-8 gap-8 ring-4 ring-cyan-600 ">
						<div className="col-span-3 md:col-span-1">
							{/* <img src="" alt="profileImg" /> */}
							<img
								src="https://bootdey.com/img/Content/avatar/avatar7.png"
								alt="Admin"
								class=""></img>
						</div>
						<div className=" flex flex-col md:justify-center md:align-middle col-span-3 md:col-span-2 p-4">
							<div className="py-2 my-2">
								<h1 className="uppercase text-xl font-semibold text bg-secondary py-1 ">
									first name
								</h1>
								<p className="text-xl">{localStorage.getItem('name')}</p>
							</div>

							<div className="py-2 my-2">
								<h1 className="uppercase text-xl font-semibold text bg-secondary py-1">
									Last name
								</h1>
								<p className="text-xl">{localStorage.getItem('lastname')}</p>
							</div>

							<div className="py-2 my-2">
								<h1 className="uppercase text-xl font-semibold text bg-secondary py-1">
									email
								</h1>
								<p className="text-xl">{localStorage.getItem('email')}</p>
							</div>
						</div>
					</div>
				</div>
				{!isFillForm && (
					<center>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 md:px-20 rounded-full "
							onClick={startFillForm}>
							Add a Post
						</button>
					</center>
				)}
				{isFillForm ? <PostForm /> : null}
				{isFillForm ? (
					<center>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-8 md:px-20 rounded-full "
							onClick={NotesPosted}>
							Close Form
						</button>
					</center>
				) : null}
				<center className="py-6 font-bold">
					<NavLink to={`/user/post/${userId}`}>
						Click this link to See your all uploaded Notes.
					</NavLink>
				</center>
			</div>

			{/* // <button onClick={openForm}>Load form</button> */}
		</div>
		// </div>
	);
};
export default Profile;
