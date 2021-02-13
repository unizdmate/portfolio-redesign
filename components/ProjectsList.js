import SingleProject from "./SingleProject";
import { projects } from "../data/projects";
import styles from "../styles/ProjectsList.module.css";

const ProjectsList = () => {
  return (
    <div className={styles.projects__container}>
      {projects.map((project) => (
        <SingleProject id={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
