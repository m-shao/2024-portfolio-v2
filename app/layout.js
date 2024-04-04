// import { Arial } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// const arial = Arial({ subsets: ['latin'] });

const englisch = localFont({
	src: [
		{
			path: '../fonts/englisch-light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../fonts/englisch-light-italic.otf',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../fonts/englisch-regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/englisch-regular-italic.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../fonts/englisch-bold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../fonts/englisch-bold-italic.otf',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../fonts/englisch-extrabold.otf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../fonts/englisch-extrabold-italic.otf',
			weight: '800',
			style: 'italic',
		},
		{
			path: '../fonts/englisch-black.otf',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../fonts/englisch-black-italic.otf',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-englisch',
});

export const metadata = {
	title: 'Minglun Shao',
	description: "Minglun Shao's personal website",
	icons: {
		icon: '/favicon.ico',
		favicon: '/favicon.ico',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={
					'bg-background-100 overflow-x-hidden ' + englisch.className
				}>
				{children}
			</body>
		</html>
	);
}
