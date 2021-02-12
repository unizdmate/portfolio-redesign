import React from "react";
import ContactComponent from "../components/ContactComponent";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../animations/variants";

const contact = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <ContactComponent />
    </motion.div>
  );
};

export default contact;
