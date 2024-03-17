import { motion, cubicBezier } from 'framer-motion'

const OverflowReveal = ({ children, delay }) => {
    const duration = 0.6;

    return (
        <motion.div initial={{overflow:'hidden'}} animate={{overflow:'visible'}} transition={{delay:(duration+delay)*0.9}} className='overflow-hidden'>
            <motion.div initial={{transform:'translateY(100%)', opacity:'0%'}} animate={{transform:'translateY(0)', opacity:'100%'}} transition={{ease:'anticipate', delay:delay, duration:duration}} className=''>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default OverflowReveal