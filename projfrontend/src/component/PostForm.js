import React, { useState, useEffect, useContext } from 'react';
import Progress from 'react-progressbar';
import firebase from '../firebase';
import { Context as NotesContext } from '../context/notesContext';
import { useParams } from 'react-router-dom';

const PostForm = () => {
	const [values, setValues] = useState({
		title: '',
		description: '',
		content: '',
		semester: '',
		branch: '',
		subject: '',
	});
	const [percentage, setPercentage] = useState(0);

	const handleChange = (name) => (event) => {
		const value = name === 'content' ? event.target.files[0] : event.target.value;
		setValues({ ...values, [name]: value });
	};

	const handleSave = () => {
		let bucketName = 'images';
		let file = values.content;
		let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
		let uploadTask = storageRef.put(file);
		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function () {
			let downloadURL = uploadTask.snapshot;
			const percentage =
				(uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) *
				100;
			console.log('percentage', percentage);
			setPercentage(percentage);
			if (percentage == 100) {
				alert('file uploaded!!, now fill the rest form');
			}
			console.log(downloadURL);
		});

		uploadTask.then(async () => {
			const url = await storageRef.getDownloadURL();
			console.log(url);
			setValues({ ...values, content: url });
			// setImage(url);
			// setImageUploading(false);
		});
	};

	const { createNotes } = useContext(NotesContext);
	const params = useParams();
	const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
	const branches = ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CIVIL'];
	let subjects = ['temp', 'temp1'];
	if (values.semester == 1 || values.semester == 2) {
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
	} else if (
		values.semester == 3 &&
		(values.branch == 'CSE' || values.branch == 'IT')
	) {
		subjects = [
			'Engg.Maths-3',
			'Digital Electronics',
			'OOPS',
			'DSA (C LAnguage)',
			'Software Engineering',
			'Economics',
		];
	} else if (
		values.semester == 4 &&
		(values.branch == 'CSE' || values.branch == 'IT')
	) {
		subjects = [
			'DBMS',
			'Networking',
			'TOC',
			'Discrete Mathematics',
			'Microprocessors',
		];
	} else if (
		values.semester == 5 &&
		(values.branch == 'CSE' || values.branch == 'IT')
	) {
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
	} else if (
		values.semester == 6 &&
		(values.branch == 'CSE' || values.branch == 'IT')
	) {
		subjects = [
			'Digital Image Processing',
			'Machine Learning',
			'Information Security System',
			'Computer Architecture and Organization',
			'Cloud Computing',
			'Distributed System',
			'Software Defined Network',
		];
	} else if (
		values.semester == 7 &&
		(values.branch == 'CSE' || values.branch == 'IT')
	) {
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
	} else if (
		values.semester == 8 &&
		(values.branch == 'CSE' || values.branch == 'IT')
	) {
		subjects = [
			'Mobile Computing',
			'Digital Image Processing',
			'Distributed Systems',
			'Hardware Testing and Fault Tolerance',
			'Real Time System',
			'UNIX Network Programming And Simulation Lab',
			'FPGA Lab',
		];
	} else if (values.semester == 3 && values.branch == 'ECE') {
		subjects = [
			'Advance Engineering Mathematics-I',
			'Technical Communication',
			'Managerial Economics And Financial Accounting',
			'Signals & Systems',
			'Network Theory',
			'Electronic Devices',
			'Electronics Devices Lab',
		];
	} else if (values.semester == 4 && values.branch == 'ECE') {
		subjects = [
			'Advance Engineering Mathematics-II',
			'Managerial Economics And Financial Accounting',
			'Technical Communication',
			'Analog Circuits',
			'Microcontrollers',
			'Electronics Measurement & Instrumentation',
		];
	} else if (values.semester == 5 && values.branch == 'ECE') {
		subjects = [
			'Computer Architecture',
			'Electromagnetics Waves',
			'Control system',
			'Digital Signal Processing',
			'Microwave Theory & Techniques',
			'Bio-Medical Electronics',
			'Embedded Systems',
		];
	} else if (values.semester == 6 && values.branch == 'ECE') {
		subjects = [
			'Power Electronics',
			'Computer Network',
			'Fiber Optics Communications',
			'Antennas and Propagation',
			'Information Theory and Coding',
			'Introduction to MEMS',
			'Nano Electronics',
		];
	} else if (values.semester == 7 && values.branch == 'ECE') {
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
	} else if (values.semester == 8 && values.branch == 'ECE') {
		subjects = [
			'Radar & TV Engineering',
			'Mems And Nanotechnology',
			'Computer Networks',
			'Operating Systems',
			'Micro Controllers & Embedded Systems',
			'Fabrication Lab',
			'Industrial Economics & Management',
		];
	} else if (values.semester == 3 && values.branch == 'EE') {
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
	} else if (values.semester == 4 && values.branch == 'EE') {
		subjects = [
			'Economics',
			'Technical Communication',
			'Advanced Maths-2',
			'Analog Circuits',
			'MicroControllers',
			'Electronics measurements and instrumentations',
			'Analog and digital communication',
		];
	} else if (values.semester == 5 && values.branch == 'EE') {
		subjects = [
			'Electrical Materials',
			'Power System – I',
			'Control System',
			'Microprocessor',
			'Electrical Machine Design',
			'Restructured Power System',
			'Electromagnetic Wave',
		];
	} else if (values.semester == 6 && values.branch == 'EE') {
		subjects = [
			'Computer Architecture',
			'Power System –II',
			'Power System Protection',
			'Electrical Energy Conservation And Auditing',
			'Electrical Drives',
			'Power System Planning',
			'Digital Signal Processing',
		];
	} else if (values.semester == 7 && values.branch == 'EE') {
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
	} else if (values.semester == 8 && values.branch == 'EE') {
		subjects = [
			'EHV AC/DC Transmission',
			'Electric Drives And Their Control',
			'Protection Of Power System',
			'Utilization Of Electrical Power',
			'Facts Devices & Their Applications',
			'Power System Transients',
			'',
		];
	} else if (values.semester == 3 && values.branch == 'ME') {
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
	} else if (values.semester == 4 && values.branch == 'ME') {
		subjects = [
			'Data Analytics',
			'Managerial Economics And Financial Accounting',
			'Technical Communication',
			'Digital Electronics',
			'Fluid Mechanics And Fluid Machines',
			'Manufacturing Processes',
			'Theory Of Machines',
		];
	} else if (values.semester == 5 && values.branch == 'ME') {
		subjects = [
			'Mechatronic Systems',
			'Heat Transfer',
			'Manufacturing Technology',
			'Design Of Machine Elements – I',
			'Principles Of Management',
			'Steam Engineering',
			'Automobile Engineering',
		];
	} else if (values.semester == 6 && values.branch == 'ME') {
		subjects = [
			'Measurement And Metrology',
			'Computer Integrated Manufacturing Systems (CIMS)',
			'Mechanical Vibrations',
			'Design Of Machine Elements- II',
			'Quality Management',
			'Refrigeration And Air Conditioning',
			'Non-Conventional Machining Methods',
		];
	} else if (values.semester == 7 && values.branch == 'ME') {
		subjects = [
			'Finite Element Methods',
			'Refrigeration And Air Conditioning',
			'Operations Research',
			'Turbomachines',
			'Operations Management',
			'Micro And Nano Manufacturing',
			'Robotics',
		];
	} else if (values.semester == 8 && values.branch == 'ME') {
		subjects = [
			'COMPUTER INTEGRATED MANUFACTURING SYSTEMS',
			'LAWS FOR ENGINEERS',
			'POWER GENERATION',
			'PRODUCT DEVELOPMENT AND LAUNCHING',
			'COMPUTATIONAL FLUID DYNAMICS',
			'TOTAL QUALITY MANAGEMENT',
			'CAM LAB',
		];
	} else if (values.semester == 3 && values.branch == 'CIVIL') {
		subjects = [
			'3CE2-01: ADVANCE ENGINEERING MATHEMATICS-I. ...',
			'3CE1-02/4CE1-02: TECHNICAL COMMUNICATION. ...',
			'3CE1-03/4CE1-03: MANAGERIAL ECONOMICS AND FINANCIAL ACCOUNTING',
			'3CE4-05: SURVEYING. ...',
			'3CE4-06: FLUID MECHANICS. ...',
			'3CE4-08: ENGINEERING GEOLOGY',
		];
	} else if (values.semester == 4 && values.branch == 'CIVIL') {
		subjects = [
			'Advance Engineering Mathematics-II',
			'Managerial Economics And Financial Accounting',
			'Technical Communication',
			'BASIC ELECTRONICS FOR CIVIL ENGINEERING APPLICATIONS',
			'Strength Of Materials',
			'Hydraulics Engineering',
		];
	} else if (values.semester == 5 && values.branch == 'CIVIL') {
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
	} else if (values.semester == 6 && values.branch == 'CIVIL') {
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
	} else if (values.semester == 7 && values.branch == 'CIVIL') {
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
	} else if (values.semester == 8 && values.branch == 'CIVIL') {
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

	const handleSubmit = async (event) => {
		event.preventDefault();

		// showImage();
		createNotes({
			title: values.title,
			description: values.description,
			content: values.content,
			semester: values.semester,
			branch: values.branch,
			subject: values.subject,
			userId: params.userId,
		});
	};

	return (
		<div className="flex justify-center mx-4 md:mx-0">
			<div className="flex flex-col flex-grow rounded max-w-md bg-white p-6 justify-center">
				<label
					htmlFor="First Name"
					class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					Title
				</label>
				<input
					class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
					type="text"
					id="First Name"
					placeholder="Title"
					onChange={handleChange('title')}></input>

				<label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					Description
				</label>
				<input
					class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
					type="text"
					placeholder="Description "
					onChange={handleChange('description')}></input>

				<label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					PDF
				</label>
				<input
					class="text-base py-2 focus:outline-none pb-2"
					type="file"
					placeholder="ex: mail@gmail.com"
					name="content"
					onChange={handleChange('content')}></input>

				<center>
					<label className="" htmlFor="">
						After choosing file click the button below to proceed
					</label>
				</center>

				<button
					className="w-1/2 my-2 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full "
					onClick={(event) => {
						event.preventDefault();
						handleSave();
					}}>
					Upload File
				</button>

				<Progress completed={percentage} color="green" />

				<label
					htmlFor="First Name"
					class="text-sm font-bold text-gray-700 tracking-wide my-4 mt-8">
					Branch
				</label>

				<select
					name="lavesh"
					onChange={handleChange('branch')}
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
					onChange={handleChange('semester')}
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
					onChange={handleChange('subject')}
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
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full my-8"
					onClick={handleSubmit}>
					<h3 className="my-3">Upload Notes</h3>
				</button>
			</div>
		</div>
	);
};

export default PostForm;
