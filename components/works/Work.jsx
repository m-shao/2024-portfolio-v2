'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Work = ({ project, index, selected, prevSelected, setSelectedWork }) => {
	return (
		<motion.div
			layoutId={project.name + '-outer-container'}
			transition={{
				duration: 1,
				ease: [0.6, 0.01, 0, 0.95],
			}}
			onClick={() => setSelectedWork(index)}
			className={
				'flex flex-col w-full font-sans bg-white group cursor-pointer ' +
				(prevSelected ? 'z-30' : 'z-20')
			}
			style={{
				backgroundColor: project.bg,
				color: project.text,
			}}>
			<motion.div
				className='w-full h-auto'
				layoutId={project.name + '-inner-image'}
				transition={{
					duration: 1,
					ease: [0.6, 0.01, 0, 0.95],
				}}>
				<Image
					className='w-full h-full'
					src={project.image}
					alt={project.name + ' project banner'}
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0,
					delay: 1,
					ease: [0.6, 0.01, 0, 0.95],
				}}
				className={
					'grid grid-rows-[0fr] transition-all duration-500 origin-bottom ' +
					(!selected && 'group-hover:grid-rows-[1fr]')
				}>
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
			</motion.div>
		</motion.div>
	);
};

export default Work;
