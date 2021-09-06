import React, { useState, useContext } from 'react';
import { Context as notesContext } from '../../context/notesContext';
import Card from '../../component/Card';
import SearchBar from '../../component/SearchBar';
import CommentBox from '../../component/CommentBox';
import Footer from '../../component/Footer';
import { Redirect, Link, NavLink } from 'react-router-dom';

const Home = () => {
	const { filterNotes, state } = useContext(notesContext);

	const [semester, setSemester] = useState(0);
	const [branch, setBranch] = useState('');
	const [subject, setSubject] = useState('');

	const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
	const branches = ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CIVIL'];
	let subjects = [];

	const uid = localStorage.getItem('user');
	const url = '/profile/' + uid;

	if (semester == 1 || semester == 2) {
		subjects = [
			'Engg.Maths-1',
			'Engg.Maths-2',
			'Chemistry',
			'Technical Communication',
			'Human Values',
			'BEE',
			'BME',
			'Physics',
			'C Programming',
		];
	} else if (semester == 3 && (branch == 'CSE' || branch == 'IT')) {
		subjects = [
			'Engg.Maths-3',
			'Digital Electronics',
			'OOPS',
			'DSA (C LAnguage)',
			'Software Engineering',
			'Economics',
		];
	} else if (semester == 4 && (branch == 'CSE' || branch == 'IT')) {
		subjects = [
			'DBMS',
			'Networking',
			'TOC',
			'Discrete Mathematics',
			'Microprocessors',
		];
	} else if (semester == 5 && (branch == 'CSE' || branch == 'IT')) {
		subjects = [
			'Information Theory and coding',
			'Compiler Design',
			'operating system',
			'computer graphics and multimedia',
			'Analysis of algorithms',
			'wireless communication',
			'Human Computer Interaction',
			'Bioinformatics',
		];
	} else if (semester == 6 && (branch == 'CSE' || branch == 'IT')) {
		subjects = [
			'Digital Image Processing',
			'Machine Learning',
			'Information Security System',
			'Computer Architecture and Organization',
			'Cloud Computing',
			'Distributed System',
			'Software Defined Network',
		];
	} else if (semester == 7 && (branch == 'CSE' || branch == 'IT')) {
		subjects = [
			'Cloud computing',
			'Information System Security',
			'Data Mining and Data Waregousing',
			'Aided design for VLSI',
			'Computer Construction',
			'Advanced DBMS',
			'Robotics',
			'Data Compression tecniques',
		];
	} else if (semester == 8 && (branch == 'CSE' || branch == 'IT')) {
		subjects = [
			'Mobile Computing',
			'Digital Image Processing',
			'Distributed Systems',
			'Hardware Testing and Fault Tolerance',
			'Real Time System',
			'UNIX Network Programming And Simulation Lab',
			'FPGA Lab',
		];
	} else if (semester == 3 && branch == 'ECE') {
		subjects = [
			'Advance Engineering Mathematics-I',
			'Technical Communication',
			'Managerial Economics And Financial Accounting',
			'Signals & Systems',
			'Network Theory',
			'Electronic Devices',
			'Electronics Devices Lab',
		];
	} else if (semester == 4 && branch == 'ECE') {
		subjects = [
			'Advance Engineering Mathematics-II',
			'Managerial Economics And Financial Accounting',
			'Technical Communication',
			'Analog Circuits',
			'Microcontrollers',
			'Electronics Measurement & Instrumentation',
		];
	} else if (semester == 5 && branch == 'ECE') {
		subjects = [
			'Computer Architecture',
			'Electromagnetics Waves',
			'Control system',
			'Digital Signal Processing',
			'Microwave Theory & Techniques',
			'Bio-Medical Electronics',
			'Embedded Systems',
		];
	} else if (semester == 6 && branch == 'ECE') {
		subjects = [
			'Power Electronics',
			'Computer Network',
			'Fiber Optics Communications',
			'Antennas and Propagation',
			'Information Theory and Coding',
			'Introduction to MEMS',
			'Nano Electronics',
		];
	} else if (semester == 7 && branch == 'ECE') {
		subjects = [
			'Antennas & Wave Propagation',
			'Digital Signal Processing',
			'Digital Image Processing',
			'Wireless Communication',
			'VLSI Design',
			'Advanced Microprocessors',
			'Artificial Intelligence And Expert Systems',
			'VHDL',
		];
	} else if (semester == 8 && branch == 'ECE') {
		subjects = [
			'Radar & TV Engineering',
			'Mems And Nanotechnology',
			'Computer Networks',
			'Operating Systems',
			'Micro Controllers & Embedded Systems',
			'Fabrication Lab',
			'Industrial Economics & Management',
		];
	} else if (semester == 3 && branch == 'EE') {
		subjects = [
			'Advance Mathematics',
			'Technical Communication',
			'Economics',
			'Power generation process',
			'Electrical circuit analysis',
			'Analog Electronics',
			'Electrical Machine 1',
			'Electromagnetic fields',
		];
	} else if (semester == 4 && branch == 'EE') {
		subjects = [
			'Economics',
			'Technical Communication',
			'Advanced Maths-2',
			'Analog Circuits',
			'MicroControllers',
			'Electronics measurements and instrumentations',
			'Analog and digital communication',
		];
	} else if (semester == 5 && branch == 'EE') {
		subjects = [
			'Electrical Materials',
			'Power System – I',
			'Control System',
			'Microprocessor',
			'Electrical Machine Design',
			'Restructured Power System',
			'Electromagnetic Wave',
		];
	} else if (semester == 6 && branch == 'EE') {
		subjects = [
			'Computer Architecture',
			'Power System –II',
			'Power System Protection',
			'Electrical Energy Conservation And Auditing',
			'Electrical Drives',
			'Power System Planning',
			'Digital Signal Processing',
		];
	} else if (semester == 7 && branch == 'EE') {
		subjects = [
			'Computer System Engg.',
			'Computer System Planning',
			'Computer System Analysis',
			'Artificial Intelligence techniques',
			'Non-conventional energy sources',
			'Electromagnetic field Theory',
			'Computer Aided design of Electrical Engineering',
			'Economic scope of power system',
		];
	} else if (semester == 8 && branch == 'EE') {
		subjects = [
			'EHV AC/DC Transmission',
			'Electric Drives And Their Control',
			'Protection Of Power System',
			'Utilization Of Electrical Power',
			'Facts Devices & Their Applications',
			'Power System Transients',
			'',
		];
	} else if (semester == 3 && branch == 'ME') {
		subjects = [
			' ADVANCE ENGINEERING MATHEMATICS-I',
			'TECHNICAL COMMUNICATION',
			' MANAGERIAL ECONOMICS AND FINANCIAL ACCOUNTING',
			'ENGINEERING MECHANICS',
			'ENGINEERING THERMODYNAMICS',
			'MATERIAL SCIENCE AND ENGINEERING',
			' MECHANICS OF SOLIDS ',
			'',
		];
	} else if (semester == 4 && branch == 'ME') {
		subjects = [
			'Data Analytics',
			'Managerial Economics And Financial Accounting',
			'Technical Communication',
			'Digital Electronics',
			'Fluid Mechanics And Fluid Machines',
			'Manufacturing Processes',
			'Theory Of Machines',
		];
	} else if (semester == 5 && branch == 'ME') {
		subjects = [
			'Mechatronic Systems',
			'Heat Transfer',
			'Manufacturing Technology',
			'Design Of Machine Elements – I',
			'Principles Of Management',
			'Steam Engineering',
			'Automobile Engineering',
		];
	} else if (semester == 6 && branch == 'ME') {
		subjects = [
			'Measurement And Metrology',
			'Computer Integrated Manufacturing Systems (CIMS)',
			'Mechanical Vibrations',
			'Design Of Machine Elements- II',
			'Quality Management',
			'Refrigeration And Air Conditioning',
			'Non-Conventional Machining Methods',
		];
	} else if (semester == 7 && branch == 'ME') {
		subjects = [
			'Finite Element Methods',
			'Refrigeration And Air Conditioning',
			'Operations Research',
			'Turbomachines',
			'Operations Management',
			'Micro And Nano Manufacturing',
			'Robotics',
		];
	} else if (semester == 8 && branch == 'ME') {
		subjects = [
			'COMPUTER INTEGRATED MANUFACTURING SYSTEMS',
			'LAWS FOR ENGINEERS',
			'POWER GENERATION',
			'PRODUCT DEVELOPMENT AND LAUNCHING',
			'COMPUTATIONAL FLUID DYNAMICS',
			'TOTAL QUALITY MANAGEMENT',
			'CAM LAB',
		];
	} else if (semester == 3 && branch == 'CIVIL') {
		subjects = [
			'3CE2-01: ADVANCE ENGINEERING MATHEMATICS-I. ...',
			'3CE1-02/4CE1-02: TECHNICAL COMMUNICATION. ...',
			'3CE1-03/4CE1-03: MANAGERIAL ECONOMICS AND FINANCIAL ACCOUNTING',
			'3CE4-05: SURVEYING. ...',
			'3CE4-06: FLUID MECHANICS. ...',
			'3CE4-08: ENGINEERING GEOLOGY',
		];
	} else if (semester == 4 && branch == 'CIVIL') {
		subjects = [
			'Advance Engineering Mathematics-II',
			'Managerial Economics And Financial Accounting',
			'Technical Communication',
			'BASIC ELECTRONICS FOR CIVIL ENGINEERING APPLICATIONS',
			'Strength Of Materials',
			'Hydraulics Engineering',
		];
	} else if (semester == 5 && branch == 'CIVIL') {
		subjects = [
			'Theory Of Structures–I',
			'Environmental Engineering-I',
			'Geotechnical Engineering–I',
			'Surveying–II',
			'Building Design',
			'Ground Improvement Techniques',
			'Advanced Concrete Technology',
			'Solid Waste Management',
		];
	} else if (semester == 6 && branch == 'CIVIL') {
		subjects = [
			'Theory Of Structures-II',
			'Geotechnical Engineering-II',
			'Environmental Engineering-II',
			'Design Of Concrete Structures-I',
			'Transportation Engineering-I',
			'Remote Sensing And GIS',
			'Rock Mechanics',
			'Repair And Rehabilitation Of Buildings',
		];
	} else if (semester == 7 && branch == 'CIVIL') {
		subjects = [
			'Water Resources Engineering-I',
			'Design Of Steel Structures-I',
			'Design Of Concrete Structures-II',
			'Transportation Engineering-II',
			' Applications Numerical Methods in Civil Engineering ',
			'Advance Transportation',
			'Design Of Pre‐Stressed Concrete Structures',
			'Rural Water Supply And Sanitation',
		];
	} else if (semester == 8 && branch == 'CIVIL') {
		subjects = [
			'Water Resources Engineering-II',
			' Design Of Steel Structures–II ',
			'Project Planning & Construction Management',
			'bridge engg.',
			'Advanced Foundation Engineering ',
			'Earthquake Resistant Construction & Design ',
			'Professional Practices And Estimating ',
		];
	}

	const handleChange = (event) => {
		filterNotes({ branch, semester, subject });
		console.log('array', state.postArray);
		state.postArray.map((post, index) => {
			return <Card post={post} />;
		});
	};
	const uploadNotes = () => {
		console.log('test');
		if (!localStorage.getItem('token')) {
			console.log('yi');
			return <Redirect to="/signin" />;
			// return <Link to="/signin" />;
		} else {
			return <Redirect to={`/user/post/${localStorage.getItem('user')}`} />;
		}
	};

	return (
		<div className=" pt-20">
			<div className="relative flex flex-col bg-banner bg-cover min-h-screen">
				<div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-60"></div>
				<div class=" absolute top-1/2 transform -translate-y-1/2 ml-16 md:w-1/2 ">
					<h1 className="filter drop-shadow-xl pt-5 md:pt-0 md:text-5xl text-3xl font-extrabold text-secondary font-heading tracking-wide">
						Welcome to RTU-Notes
					</h1>
					<br />
					<br />
					<ul className="text-xl text-white ">
						<li>
							<h3 className="drop-shadow-xl md:text-2xl">
								Upload Notes/Study Material of RTU exams <br /> to help others study
								from the best material.
							</h3>
						</li>
						<br />
						<li>
							<h2 className="md:text-2xl">
								Practice Like you are a Loser,
								<br /> Perform Like You are a Winner
							</h2>
						</li>
						<br />

						<li>
							<h3 className="md:text-2xl">To upload Notes, Click Below!</h3>
						</li>
					</ul>
					<br />

					<button
						class="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-2 mt-8 rounded justify-center shadow-xl"
						onClick={() => uploadNotes()}>
						<a
							href={!localStorage.getItem('token') ? `/signup` : url}
							className="text-white">
							<h1 className="my-3 mx-6">Upload Notes!</h1>
						</a>
					</button>
				</div>
			</div>
			<div>
				<SearchBar />

				<div className="row">
					{state.searchArray.map((post, index) => {
						console.log('Hellodkjhdb', post);
						return (
							<div
								key={index}
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
								<Card post={post} />
							</div>
						);
					})}
				</div>
				<div className="flex justify-center my-4 mx-4 md:mx-0">
					<div className="flex flex-col flex-grow object-center max-w-md my-10 bg-white shadow-xl rounded p-8">
						<h2 className="text-2xl mb-4">
							Filter Notes By Branch, Semester and Subject
						</h2>
						<label
							htmlFor="First Name"
							class="text-sm font-bold text-gray-700 tracking-wide my-4 mt-8">
							Branch
						</label>

						<select
							name="lavesh"
							onChange={(e) => setBranch(e.target.value)}
							placeholder="branch"
							className="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500">
							<option>Select</option>
							{branches.map((branch, index) => {
								return (
									<option key={index} value={branch}>
										{branch}
									</option>
								);
							})}
						</select>

						<label class="text-sm font-bold text-gray-700 tracking-wide my-4 mt-8">
							Semester
						</label>
						<select
							onChange={(e) => setSemester(e.target.value)}
							placeholder="semester"
							className="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500">
							<option>Select</option>
							{semesters.map((sem, index) => {
								return (
									<option key={index} value={sem}>
										{sem}
									</option>
								);
							})}
						</select>

						<label class="text-sm font-bold text-gray-700 tracking-wide my-4 mt-8">
							Subject
						</label>
						<select
							onChange={(e) => setSubject(e.target.value)}
							placeholder="subject"
							className="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500">
							<option>Select</option>
							{subjects.map((sub, index) => {
								return (
									<option key={index} value={sub}>
										{sub}
									</option>
								);
							})}
						</select>

						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full mt-5"
							onClick={(event) => {
								event.preventDefault();
								filterNotes({ branch, semester, subject });
							}}>
							<h3 className="my-3">Filter Notes</h3>
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{state.postArray.map((post, index) => {
						console.log('Hellodkjhdb', post);
						return (
							<div key={index} className="">
								<Card post={post} />
							</div>
						);
					})}
				</div>

				<CommentBox />
			</div>
			<Footer />
			<div className=" font-semibold text-gray-800">
				<center>
					Created With{' '}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 inline"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clip-rule="evenodd"
						/>
					</svg>{' '}
					by Manish Motwani and Lavesh Garg
				</center>
			</div>
		</div>
	);
};

export default Home;
