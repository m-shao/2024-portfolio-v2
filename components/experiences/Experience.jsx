import Image from 'next/image';

const Experience = ({ project }) => {
	return (
		<div style={{ backgroundColor: project.bg }} className='flex gap-4'>
			<div className='flex items-center justify-center w-[4rem] h-[4rem]'>
				<Image
					className='h-full'
					src={project.image}
					alt={project.name + ' logo'}
				/>
			</div>
			<div>
				<h3>{project.company}</h3>
				<p>{project.role}</p>
				<p className='text-zinc-300'>{project.date}</p>
			</div>
		</div>
	);
};

export default Experience;
