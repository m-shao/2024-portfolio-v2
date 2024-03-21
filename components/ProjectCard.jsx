import Image from 'next/image';
import Link from 'next/link';

import BasicFadeIn from '@/components/animationWrappers/BasicFadeIn';

const ProjectCard = ({ project }) => {
	const colourRotation = ['bg-primary', 'bg-accent-200', 'bg-accent-100'];
	return (
		<BasicFadeIn direction={'left'}>
			<Link
				target='_blank'
				href={project.path}
				className='flex items-center flex-col md:flex-row w-full gap-8 px-4 py-4 bg-background-200 hover:scale-[101%] transition-transform duration-500'>
				<div className='flex flex-col items-start flex-1 h-full gap-4'>
					<h2 className='text-center md:text-left'>{project.name}</h2>
					<div className='flex flex-wrap justify-center gap-2 md:justify-start md:gap-4'>
						{project.tech.map((tech, index) => (
							<div
								key={index}
								className={
									'px-4 py-2 font-sans text-white ' +
									colourRotation[index % 3]
								}>
								{tech}
							</div>
						))}
					</div>
				</div>
				<div className='flex items-center justify-center w-48 h-48 p-3 border-4 bg-background-100 border-primary'>
					<Image
						className='w-full h-full'
						src={project.image}
						alt={project.name}
					/>
				</div>
			</Link>
		</BasicFadeIn>
	);
};

export default ProjectCard;
