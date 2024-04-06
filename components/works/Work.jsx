'use client';

import { useState } from 'react';
import Image from 'next/image';

const Work = ({ project }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div
			onClick={handleClick}
			className={
				'flex flex-col w-full font-sans bg-white group cursor-pointer'
			}
			style={{
				backgroundColor: project.bg,
				color: project.text,
			}}>
			<Image
				className='w-full h-auto'
				src={project.image}
				alt={project.name + ' project banner'}
			/>
			<div className='grid grid-rows-[0fr] transition-all group-hover:grid-rows-[1fr] duration-500 origin-bottom'>
				<div className='overflow-hidden'>
					<div className='flex flex-col gap-3 px-8 pb-4'>
						<div>
							<p>{project.description}</p>
						</div>
						<div className='flex flex-wrap gap-2'>
							{project.tech.map((tech, index) => (
								<span
									key={index}
									className='px-4 py-1 text-sm border-2'
									style={{
										background: project.bg,
									}}>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
