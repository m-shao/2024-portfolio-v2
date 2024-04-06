import { Fragment } from 'react';

import { projects } from '@/config/projects';

import Work from './Work';
import OverflowReveal from '@/components/animationWrappers/OverflowReveal';
import BasicFadeIn from '@/components/animationWrappers/BasicFadeIn';

const Works = () => {
	return (
		<section className='flex flex-col gap-8 pt-8'>
			<OverflowReveal delay={1}>
				<h2>Works</h2>
			</OverflowReveal>
			<div className='flex flex-col gap-8'>
				{projects.map((project, index) => (
					<BasicFadeIn
						key={index}
						direction={'left'}
						delay={1.5 + index * 0.1}>
						<Work project={project} />
					</BasicFadeIn>
				))}
			</div>
		</section>
	);
};

export default Works;
