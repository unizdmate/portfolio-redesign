import SingleProject from "./SingleProject";
import { projects } from "../data/projects";

const ProjectsList = () => {
  return (
    <>
      {projects.map((project) => (
        <SingleProject id={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectsList;
