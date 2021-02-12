import React from "react";
import AboutmeComponent from "../components/AboutmeComponent";
import { motion } from "framer-motion";
import { HomePageFadeInVariants } from "../animations/variants";

const about = () => {
  return (
    <motion.div
      layoutId="about"
      variants={HomePageFadeInVariants}
      initial="initial"
      animate="animate"
    >
      <AboutmeComponent />
    </motion.div>
  );
};

export default about;
