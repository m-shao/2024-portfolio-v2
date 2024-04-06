'use client';

import { motion } from 'framer-motion';

const OverflowReveal = ({ children, delay }) => {
	const duration = 0.8;
	const innerContainer = {
		hidden: { transform: 'translateY(100%)', opacity: '0%' },
		show: { transform: 'translateY(0)', opacity: '100%' },
		transition: {
			ease: [0.6, 0.01, 0, 0.95],
			delay: delay,
			duration: duration,
		},
		viewport: {
			once: true,
		},
	};

	return (
		<div className='overflow-hidden'>
			<motion.div
				initial={innerContainer.hidden}
				whileInView={innerContainer.show}
				transition={innerContainer.transition}
				viewport={innerContainer.viewport}>
				{children}
			</motion.div>
		</div>
	);
};

export default OverflowReveal;
