import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Fade = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default Fade;
