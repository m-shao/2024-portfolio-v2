import Link from 'next/link';

import { navLinks } from '@/config/navLinks';

const Navbar = () => {
	return (
		<nav className='flex justify-center w-full gap-10 py-12 font-sans text-lg font-normal md:text-xl md:gap-20 text-primary'>
			{navLinks.map((link, index) => (
				<Link href={link.path} className='group' key={index}>
					<p>/{link.title}</p>
					<div className='w-0 group-hover:w-full bg-primary h-[1px] transition-all'></div>
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
