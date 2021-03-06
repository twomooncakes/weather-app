import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1
    }
  },
  end: {
    transition: {
      staggerChildren: 0.1
    }
  },
}

const loadingCircleVariants = {
  start: {
    y: '0%'
  },
  end: {
    y: '100%'
  },
}

const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: "reverse", 
  ease: "easeInOut",
}

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader-container"
        variants={loadingContainerVariants} 
        initial="start"
        animate="end"
      >
        <motion.span className="loader" variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
        <motion.span className="loader" variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
        <motion.span className="loader" variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
      </motion.div>
    </>
  )
}

export default Loader;