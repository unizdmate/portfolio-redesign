import styles from "../styles/Projects.module.css";
import ProjectsList from "./ProjectsList";

const ProjectsComponent = () => {
  return (
    <div className={styles.projects__container}>
      <ProjectsList />
    </div>
  );
};

export default ProjectsComponent;
