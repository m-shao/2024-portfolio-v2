import { Fragment } from 'react';

import { experience } from '@/config/experience';

import Experience from './Experience';

import OverflowReveal from '@/components/animationWrappers/OverflowReveal';
import BasicFadeIn from '@/components/animationWrappers/BasicFadeIn';

const Experiences = () => {
	return (
		<section className='flex flex-col gap-8 pt-16'>
			<OverflowReveal delay={0.2}>
				<h2>Experience</h2>
			</OverflowReveal>
			<div className='flex flex-col gap-8'>
				{experience.map((project, index) => (
					<BasicFadeIn
						key={index}
						direction={'left'}
						delay={0.2}
						duration={0.7}>
						<Experience project={project} />
					</BasicFadeIn>
				))}
			</div>
		</section>
	);
};

export default Experiences;
