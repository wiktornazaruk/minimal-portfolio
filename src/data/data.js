const META = {
	creation_year: 2024,
	src: 'https://github.com/wiktornazaruk/minimal-portfolio.git' //project source code link
};

const PERSONAL = {
	name: 'Wiktor Nazaruk',
	first_name: 'Wiktor',
	surname: 'Nazaruk',
	role: 'Software Developer & Data Engineering student',
	introduction:
		'I create software that is both functional and beautiful. I have experience working with a variety of technologies, including Python, JavaScript, and SQL. I am always looking for new opportunities to learn and grow, and I am excited to see where my career will take me next.',
	location: 'Gdańsk, Poland'
};

const SKILLS = {
	specializations: [
		'Software Development',
		'Data Engineering',
		'Machine Learning',
		'Deep Learning',
		'Web Development'
	],
	programmingLanguages: ['Python', 'R', 'SQL', 'C++', 'HTML', 'CSS', 'JavaScript', 'Bash', 'HubL'],
	technologies: [
		'PyTorch',
		'TensorFlow',
		'Jupyter',
		'SQL Server',
		'Power BI',
		'Svelte',
		'Sveltekit',
		'React',
		'Next',
		'PHP',
		'Node.js',
		'Express',
		'MongoDB',
		'PostgreSQL',
		'Git'
	]
};

const CONTACT = {
	email: 'wiktor.nazaruk7@gmail.com',
	github: 'https://github.com/wiktornazaruk',
	linkedin: 'https://www.linkedin.com/in/wiktor-nazaruk-3b610018a/'
};

const NAVLIST = [
	{ id: 1, url: '/about', label: 'About' },
	{ id: 2, url: '/contact', label: 'Contact' }
];

const ABOUT = {
	paragraphs: [
		"Hi there, I'm Wiktor.",
		"I've always bounced somewhere between design and engineering, however the common thread has always been my love for building things that people love to use.",
		"If you're interested in working together, feel free to reach out to me here:"
	],
	experience: [
		{
			id: 1,
			company: 'Speeron',
			jobTitle: 'Software Developer',
			startDate: 'February 2024',
			endDate: 'April 2024',
			photo: { src: '/photos/sp.webp', alt: 'Logo Speeron' }
		},
		{
			id: 2,
			company: 'Maersk Drilling',
			jobTitle: 'Student Assistant AP Finance',
			startDate: 'July 2022',
			endDate: 'September 2022',
			photo: { src: '/photos/md.webp', alt: 'Logo Maersk Drilling' }
		}
	],
	education: [
		{
			id: 1,
			school: 'Gdańsk University of Technology',
			degree: 'Data Engineering, Bachelor of Engineering',
			startDate: 'October 2022',
			endDate: 'May 2026',
			photo: { src: '/photos/pg.webp', alt: 'Logo Gdansk University of Technology' }
		},
		{
			id: 2,
			school: 'Nicolaus Copernicus High School in Gdańsk',
			degree: 'Mathematics, Physics and Computer Science',
			startDate: 'September 2018',
			endDate: 'May 2021',
			photo: { src: '/photos/ilo.webp', alt: 'Logo Nicolaus Copernicus High School' }
		}
	]
};

const PROJECTS = [
	{
		id: 1,
		title: 'Police traffic department dw',
		description:
			'Data warehouse for managing and analyzing police traffic department data. It includes various scripts and files for data extraction, transformation, and loading (ETL), database management, and data visualization.',
		link: 'https://github.com/wiktornazaruk/PoliceTrafficDepartmentDW',
		photo: { src: '/photos/dw.webp', alt: 'Data Warehouse' }
	},
	{
		id: 2,
		title: 'Face recognition neural network',
		description:
			'Artificial neural network classifier trained by backpropagation for face recognition (Famous48 dataset).',
		link: 'https://github.com/wiktornazaruk/face_recognition',
		photo: { src: '/photos/nn.webp', alt: 'Neural Network' }
	},
	{
		id: 3,
		title: 'Autofix',
		description: 'Car service website.',
		link: 'https://autofix.great-site.net/index.html',
		photo: { src: '/photos/af.webp', alt: 'Car' }
	},
	{
		id: 4,
		title: 'Urban Elegance Properties',
		description: 'Real estate agency website, properties in Dubai extracted from API.',
		link: 'https://real-estate-agency.vercel.app/',
		photo: { src: '/photos/rea.webp', alt: 'Real Estate' }
	}
];

const DATA = {
	META,
	PERSONAL,
	SKILLS,
	CONTACT,
	NAVLIST,
	ABOUT,
	PROJECTS
};

export default DATA;
