import ocmc from '../assets/project-logos/ocmc.svg';
import jamhacks from '../assets/project-logos/jamhacks.svg';
import coffeeCoach from '../assets/project-logos/coffee-coach.svg';

export const projects = [
	{
		name: 'Ontario Competitive Mathematics Committee',
		description:
			'A platform for students to practice and compete in math contests.',
		image: ocmc,
		tech: ['NextJS', 'TailwindCSS', 'Express', 'MongoDB'],
		path: 'https://www.ontariocmc.ca/',
	},
	{
		name: 'JAMHacks | Canadian Hackathon',
		description: 'Canada’s largest high school hackathon',
		image: jamhacks,
		tech: ['NextJS', 'MongoDB', 'Google API', 'Framer Motion'],
		path: 'https://www.jamhacks.ca/',
	},
	{
		name: 'Coffee Coach | Winner @ JAMHacks',
		description:
			'An AI-powered web app that helps users engage in coffee chats',
		image: coffeeCoach,
		tech: ['ReactJS', 'MongoDB', 'OpenAI API', 'Framer Motion'],
		path: 'https://github.com/m-shao/coffee-coach',
	},
];