import { about } from '@/config/about';

import OverflowReveal from '@/components/animationWrappers/OverflowReveal';
import BasicFadeIn from '@/components/animationWrappers/BasicFadeIn';

const About = () => {
	return (
		<section className='flex flex-col gap-8 pt-16'>
			<OverflowReveal delay={0.2}>
				<h2>About Me</h2>
			</OverflowReveal>
			<BasicFadeIn direction={'left'} delay={0.3} duration={0.7}>
				<div>
					<p>
						I’m a Chinese Canadian university student living (near)
						11° Toronto ON Canada. Other than programming I like
						playing video games, building keyboards and art &
						crafts. I run off of a really old pc that I got from my
						cousin that surprisingly still works. Here are some more
						fun facts for those interested 😄.
					</p>
				</div>
			</BasicFadeIn>
			<ul className='flex flex-col gap-4'>
				{about.map((fact, index) => (
					<BasicFadeIn
						direction={'left'}
						delay={0.3 + index * 0.1}
						duration={0.7}
						key={index}>
						<li>{fact}</li>
					</BasicFadeIn>
				))}
			</ul>
		</section>
	);
};

export default About;
