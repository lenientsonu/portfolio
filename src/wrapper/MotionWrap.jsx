import { motion } from "framer-motion";

const MotionWrap = (props) => {
    return (
        <motion.div
            whileInView={{ y: [150, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`${props.className} app__flex`}
        >
            {props.children}
        </motion.div>
    );
};

export default MotionWrap;
