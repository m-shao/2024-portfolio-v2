import ocmc from '@/assets/projects/ocmc.svg';
import jamhacks from '@/assets/projects/jamhacks.svg';

export const projects = [
	{
		name: 'Ontario Competitive Mathematics Committee',
		description:
			'A platform for students to practice and compete in math contests.',
		image: ocmc,
		tech: ['NextJS', 'TailwindCSS', 'Express', 'MongoDB'],
		path: 'https://www.ontariocmc.ca/',
		bg: 'white',
		text: 'black',
	},
	{
		name: 'JAMHacks | Canadian Hackathon',
		description: 'Canada’s largest high school hackathon',
		image: jamhacks,
		tech: ['NextJS', 'MongoDB', 'Google API', 'Framer Motion'],
		path: 'https://www.jamhacks.ca/',
		bg: '#2E0252',
		text: 'white',
	},
];
