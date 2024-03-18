import { motion } from 'framer-motion';

const TransformDownWithFade = ({ children, delay }) => {
	const duration = 0.6;

	return (
		<motion.div
			initial={{ transform: 'translateY(-100%)', opacity: '0%' }}
			animate={{ transform: 'translateY(0)', opacity: '100%' }}
			transition={{
				ease: [0.6, 0.01, 0, 0.95],
				delay: delay,
				duration: duration,
			}}
			className=''>
			{children}
		</motion.div>
	);
};

export default TransformDownWithFade;
