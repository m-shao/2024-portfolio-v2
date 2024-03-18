import { motion } from 'framer-motion';

const OverflowReveal = ({ children, delay }) => {
	const duration = 0.8;

	return (
		<motion.div
			initial={{ overflow: 'hidden' }}
			animate={{ overflow: 'visible' }}
			transition={{ delay: (duration + delay) * 0.75 }}
			className='overflow-hidden'>
			<motion.div
				initial={{ transform: 'translateY(100%)', opacity: '0%' }}
				animate={{ transform: 'translateY(0)', opacity: '100%' }}
				transition={{
					ease: [0.6, 0.01, 0, 0.95],
					delay: delay,
					duration: duration,
				}}
				className=''>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default OverflowReveal;
