import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Fade = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6, 
  distance = 50,
  threshold = 0.1,
  triggerOnce = true 
}) => {
  const { ref, inView } = useInView({ 
    triggerOnce,
    threshold 
  });

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
