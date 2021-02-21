import SingleProject from "./SingleProject";
import { projects } from "../data/projects";
import styles from "../styles/ProjectsList.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
      }}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </motion.div>
  );
}

const ProjectsList = () => {
  return (
    <main className={styles.projects__container}>
      {projects.map((project) => (
        <FadeInWhenVisible>
          <SingleProject key={project.id} project={project} />
        </FadeInWhenVisible>
      ))}
    </main>
  );
};

export default ProjectsList;
