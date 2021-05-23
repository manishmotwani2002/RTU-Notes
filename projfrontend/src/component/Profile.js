import React, { useState, useContext } from 'react';
import './profile.css';
import { Context as NotesContext } from '../context/notesContext';
import PostForm from './PostForm';
import Card from './Card';

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
	return (
		<div>
			<div class="container">
				<div class="main-body">
					<h1>Welcome to your profile</h1>

					<div class="row gutters-sm">
						<div class="col-md-4 mb-3">
							<div class="card">
								<div class="card-body">
									<div class="d-flex flex-column align-items-center text-center">
										<img
											src="https://bootdey.com/img/Content/avatar/avatar7.png"
											alt="Admin"
											class="rounded-circle"
											width="150"></img>
										<div class="mt-3"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-8">
							<div class="card mb-3">
								{/* {values && ( */}
								<div class="card-body">
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">FirstName</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{localStorage.getItem('name')}
										</div>
									</div>
									<hr></hr>
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">LastName</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{localStorage.getItem('lastname')}
										</div>
									</div>
									<hr></hr>
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">Email</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{localStorage.getItem('email')}
										</div>
									</div>
									<hr></hr>
								</div>
								{/* )} */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* // <button onClick={openForm}>Load form</button> */}
			{!isFillForm && (
				<button className="btn" onClick={startFillForm}>
					Add a Post
				</button>
			)}
			{isFillForm ? <PostForm /> : null}
			{isFillForm ? (
				<button className="btn" onClick={NotesPosted}>
					Close Form
				</button>
			) : null}

			{!loadPost && (
				<button
					className="btn"
					onClick={(event) => {
						event.preventDefault();
						getUserNotes();
						showUserPost();
					}}>
					Show My posts
				</button>
			)}

			{state.profileArray.map((post, index) => {
				return <Card post={post} />;
			})}
		</div>
	);
};
export default Profile;
