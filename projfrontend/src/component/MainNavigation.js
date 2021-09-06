//import classes from "*.module.css";
import { Fragment, useEffect, useState } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../middlewares/authMiddleware';
// import './MainNavigation.module.css';
import { useHistory } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const MainNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [help, setHelp] = useState(false);
	const user = localStorage.getItem('user');
	const role = localStorage.getItem('role');
	const history = useHistory();

	return (
		<nav class="fixed flex items-center justify-between z-10 left-0 right-0 top-0 py-4 px-6 max-h-20 bg-cyan-700 shadow-xl">
			<a class=" text-2xl sm:text-4xl font-logo flex-wrap  text-teal-200" href="/">
				RTU-NOTES
			</a>

			<div className=" md:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					type="button"
					className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-3"
					aria-controls="mobile-menu"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					{!isOpen ? (
						<svg
							className="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					) : (
						<svg
							className="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</button>
			</div>

			<div class="hidden md:flex justify-end md:visible text-gray-200">
				<div className=" border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
					<a class="text-xl font-bold " href="/">
						Home
					</a>
				</div>

				{isAuthenticated() && (
					<div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
						<a class="text-xl  font-bold" href={`/profile/${user}`}>
							Profile
						</a>
					</div>
				)}
				{!isAuthenticated() && (
					<div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
						<a class="text-xl font-bold " href="/signup">
							SignUp
						</a>
					</div>
				)}
				{!isAuthenticated() && (
					<div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
						<a class="text-xl font-bold " href="/signin">
							SignIn
						</a>
					</div>
				)}
				{isAuthenticated() && role == 1 && (
					<div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
						<a class="text-xl font-bold " href={`/adminprofile/${user}`}>
							Admin Dashboard
						</a>
					</div>
				)}
				{isAuthenticated() && (
					<div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
						<a
							class="text-xl font-bold hover:text-red-300"
							href="/"
							onClick={() => signout()}>
							Signout
						</a>
					</div>
				)}
			</div>
			<Transition
				show={isOpen}
				enter="transition ease-out duration-100 transform"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95">
				{(ref) => (
					<div className="md:hidden" id="mobile-menu">
						<div ref={ref} className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
							<a
								href="/"
								className="hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium">
								Home
							</a>

							{isAuthenticated() && (
								<div>
									<a
										className="hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium"
										href={`/profile/${user}`}>
										Profile
									</a>
								</div>
							)}

							{!isAuthenticated() && (
								<div>
									<a
										className="hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium"
										href="/signup">
										SignUp
									</a>
								</div>
							)}

							{!isAuthenticated() && (
								<div>
									<a
										className="hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium"
										href="/signin">
										SignIn
									</a>
								</div>
							)}
							{isAuthenticated() && role == 1 && (
								<div>
									<a
										className="hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium"
										href={`/adminprofile/${user}`}>
										Admin Dashboard
									</a>
								</div>
							)}

							{isAuthenticated() && (
								<div className="">
									<a
										className="hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium"
										href="/"
										onClick={() => signout()}>
										Signout
									</a>
								</div>
							)}
						</div>
					</div>
				)}
			</Transition>
		</nav>
	);
};

export default withRouter(MainNavigation);
