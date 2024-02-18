import React from "react";
import ProjectsComponent from "../components/ProjectsComponent";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../animations/variants";

const projects = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <ProjectsComponent />
    </motion.div>
  );
};

export default projects;
