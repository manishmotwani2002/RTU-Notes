import React, { useState, useContext } from 'react';
// import './signUpForm.css';
import { Context as authContext } from '../context/authContext';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../middlewares/authMiddleware';

export default function SignUpForm() {
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signup, state } = useContext(authContext);

	// if (state.didRedirect) {
	//   return <Redirect to="/" />;
	// }
	if (isAuthenticated()) {
		return <Redirect to="/" />;
	}

	return (
		<div className="flex flex-row items-center min-h-screen justify-around ">
			<div className="flex-grow flex-col text-center relative invisible md:visible">
				<div className="bg-signUpImage bg-cover min-h-screen bg-center opacity-80 flex items-center justify-center">
					<div className="absolute z-1 px-6 py-10">
						<h1 className="mt-6 text-5xl font-bold text-gray-100 mb-6">
							Welcome Back!
						</h1>
						<p className="mt-2 text-xl text-gray-200">
							Create an Account to upload notes!
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-grow md:pl-10 max-w-md md:mx-40 bg-white p-4 shadow-xl mt-20 mr-16 ">
				<h2 className="text-2xl mb-4">Create Your Account</h2>
				<label
					htmlFor="First Name"
					class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					First Name
				</label>
				<input
					class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
					type="text"
					id="First Name"
					placeholder="Enter your First Name"
					onChange={(event) => {
						setName(event.target.value);
					}}></input>

				<label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					Last Name
				</label>
				<input
					class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
					type="text"
					placeholder="Last Name (optional) "
					onChange={(event) => {
						setLastname(event.target.value);
					}}></input>

				<label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					Email
				</label>
				<input
					class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
					type="text"
					placeholder="ex: mail@gmail.com"
					onChange={(event) => {
						setEmail(event.target.value);
					}}></input>

				<label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					Password
				</label>
				<input
					class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
					type="password"
					placeholder="min 3 letters"
					onChange={(event) => {
						setPassword(event.target.value);
					}}></input>
				<br />

				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full "
					onClick={() =>
						signup({
							name: name,
							lastname: lastname,
							email: email,
							password: password,
						})
					}>
					<h3 className="my-3">SignUp</h3>
				</button>
				<div className="text-danger font-bold error ">
					{state.errorMessageSignup ? <div>{state.errorMessageSignup}</div> : null}
				</div>
			</div>
		</div>
	);
}
