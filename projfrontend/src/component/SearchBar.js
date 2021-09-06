import React, { useState, useContext } from 'react';
import { Context as authContext } from '../context/notesContext';

const SearchBar = () => {
	const [searchedValue, setSearchedValue] = useState('');
	const { searchNotes } = useContext(authContext);
	return (
		<div className="flex justify-center items-center shadow-xl py-10 mx-6 my-20 bg-cyan-600">
			<div className=" mx-auto px-10 text-center">
				<h1 className="mt-6 text-4xl md:text-5xl font-bold text-secondary mb-6 ">
					Search Notes by Topic
				</h1>
				<h3 className="mt-2 text-xl md:text-2xl text-gray-200">
					To easily search the notes according to topic enter the topic below,
				</h3>
				<br />
				<h3 className="text-sm md:text-base text-gray-200">
					Make Sure you write the topic name correctly without typo's otherwise it
					will lead to wrong results!
				</h3>
				<div class="flex justify-between gap-4 max-w-xl object-center">
					<div className="flex-grow my-10">
						<input
							type="text"
							className=" w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 py-4 rounded"
							placeholder="Search.."
							value={searchedValue}
							onChange={(e) => setSearchedValue(e.target.value)}
						/>
					</div>
					<button
						class=" align-middle mb-6 text-white my-10 rounded-full p-2 hover:bg-blue-400  w-12 h-12 flex items-center justify-center"
						onClick={() => searchNotes({ searchedValue: searchedValue })}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
