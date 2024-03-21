import { motion } from 'framer-motion';

const OverflowReveal = ({ children, delay }) => {
	const duration = 0.8;
	const outerContainer = {
		hidden: { overflow: 'hidden' },
		show: {
			overflow: 'visible',
		},
		transition: { delay: (duration + delay) * 0.75 },
	};
	const innerContainer = {
		hidden: { transform: 'translateY(100%)', opacity: '0%' },
		show: { transform: 'translateY(0)', opacity: '100%' },
		transition: {
			ease: [0.6, 0.01, 0, 0.95],
			delay: delay,
			duration: duration,
		},
	};

	return (
		<motion.div
			initial={outerContainer.hidden}
			animate={outerContainer.show}
			transition={outerContainer.transition}
			className='overflow-hidden'>
			<motion.div
				initial={innerContainer.hidden}
				animate={innerContainer.show}
				transition={innerContainer.transition}>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default OverflowReveal;
