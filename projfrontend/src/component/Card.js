import React, { useContext, useEffect, useState } from 'react';
import { API } from '../backend';
import { Context as NotesContext } from '../context/notesContext';

const Card = (props) => {
	const post = props.post;
	console.log('post', post);

	const postId = post._id;

	const { removeNotes } = useContext(NotesContext);

	const didReload = () => {
		window.location.reload();
	};

	return (
		<div className="relative rounded-lg mx-4 my-4 shadow-xl bg-white text-gray-800  ">
			<div className=" h-20 bg-secondary"></div>
			<h1 className="absolute top-12 bg-white right-6 left-6 text-xl mb-6 py-4 shadow-lg font-semibold">
				<center>{post.title}</center>
			</h1>
			<div className=" px-10 py-6 mx-8 mt-12 bg-white shadow-lg ">
				<div className="grid grid-cols-2 gap-4 text-center">
					<div className="ring-2 ring-cyan-600 items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-700 rounded-full">
						Branch:- {post.branch}
					</div>
					<div className=" ring-2 ring-cyan-600 items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-700 rounded-full ">
						Semester:- {post.semester}
					</div>
					<div className=" col-span-2 ring-cyan-600 ring-2 py-2 mb-4 items-center justify-center px-2  text-xs font-bold leading-none text-gray-700 rounded-full ">
						<center>{post.subject}</center>
					</div>
				</div>
				<p className="py-6 font-semibold">{post.description}</p>
			</div>
			<div className="flex justify-center px-10 py-10 my-4 bg-white shadow-lg">
				<button>
					<a
						className=" rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-6 py-3 mx-4 mt-8 shadow-xl"
						href={post.content}>
						Get Notes
					</a>
				</button>
				{(post.user == localStorage.getItem('user') ||
					localStorage.getItem('role') == 1) && (
					<button
						onClick={() => {
							removeNotes({ postId });
							didReload();
						}}>
						<a className="text-gray-600 ring-4 ring-red-400 rounded-full hover:bg-red-400 hover:text-white font-bold px-6 py-2 mx-4 mt-8 shadow-xl">
							Remove
						</a>
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
