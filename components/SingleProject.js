import styles from "../styles/SingleProject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SingleProject = ({ project }) => {
  const { id, employer, client, jobDescription, techStack, url } = project;

  return (
    <div className={styles.single__project}>
      <div className={styles.single__project__employer}>
        <h3>{employer}</h3>
      </div>
      <div className={styles.single__project__client}>
        <h4>{client}</h4>
      </div>
      <div className={styles.txt__container}>
        <b>Job description: </b>
        {jobDescription.map((description) => (
          <ul>
            <li key={id}>{description}</li>
          </ul>
        ))}
      </div>
      <div className={styles.txt__container}>
        <b>Technolgies: </b>
        {techStack.map((technology) => (
          <ul>
            <li key={id}>{technology}</li>
          </ul>
        ))}
      </div>
      {url ? (
        <div className={styles.btn__container}>
          <a
            className={styles.single__project__icon}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Check out on GitHub</p>
            <div className={styles.single__project__icon__container}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProject;
