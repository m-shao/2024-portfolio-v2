import ocmc from '@/assets/projects/ocmc.svg';
import jamhacks from '@/assets/projects/jamhacks.svg';

import ocmcLogo from '@/assets/projects/logos/ocmc-logo.svg';
import jamhacksLogo from '@/assets/projects/logos/jamhacks-logo.svg';

export const projects = [
	{
		name: 'Ontario Competitive Mathematics Committee',
		description:
			'A platform for students to practice and compete in math contests.',
		description2:
			'The Ontario Competitive Mathematics Committee is dedicated to nurturing a love for mathematics and fostering the intellectual growth of students worldwide. My team’s goal was to create an online competition portal for admins to watch over proctors, proctors to manage participants and students to receive resources, contest scores and certificates',
		image: ocmc,
		logo: ocmcLogo,
		tech: ['NextJS', 'TailwindCSS', 'Express', 'MongoDB'],
		path: 'https://www.ontariocmc.ca/',
		bg: 'white',
		text: 'black',
	},
	{
		name: 'JAMHacks | Canadian Hackathon',
		description: 'Canada’s largest high school hackathon',
		description2:
			'The Ontario Competitive Mathematics Committee is dedicated to nurturing a love for mathematics and fostering the intellectual growth of students worldwide. My team’s goal was to create an online competition portal for admins to watch over proctors, proctors to manage participants and students to receive resources, contest scores and certificates',
		image: jamhacks,
		logo: jamhacksLogo,
		tech: ['NextJS', 'MongoDB', 'Google API', 'Framer Motion'],
		path: 'https://www.jamhacks.ca/',
		bg: '#2E0252',
		text: 'white',
	},
];
