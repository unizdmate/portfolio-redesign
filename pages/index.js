import HomeComponent from "../components/HomeComponent";
import { motion } from "framer-motion";
import { HomePageFadeInVariants } from "../animations/variants";

export default function Home() {
  return (
    <motion.div
      layoutId="home"
      variants={HomePageFadeInVariants}
      initial="initial"
      animate="animate"
    >
      <HomeComponent />
    </motion.div>
  );
}
