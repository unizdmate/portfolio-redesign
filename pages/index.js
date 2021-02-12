import HomeComponent from "../components/HomeComponent";
import { animate, motion } from "framer-motion";
import { pageTransitionVariants } from "../animations/variants";

export default function Home() {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <HomeComponent />
    </motion.div>
  );
}
