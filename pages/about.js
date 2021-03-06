import React from "react";
import AboutmeComponent from "../components/AboutmeComponent";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../animations/variants";

const about = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <AboutmeComponent />
    </motion.div>
  );
};

export default about;
