import styles from "../styles/SingleProject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

const SingleProject = ({ project }) => {
  const {
    id,
    employer,
    client,
    jobDescription,
    techStack,
    gitUrl,
    webUrl,
  } = project;

  return (
    <article className={styles.single__project}>
      <div className={styles.single__project__employer}>
        <div className={styles.border}>{employer}</div>
      </div>

      <div className={styles.single__project__client}>
        <h4>{client}</h4>
      </div>

      <section className={styles.txt__container}>
        <b>Job description: </b>
        {jobDescription.map((description) => (
          <ul key={description}>
            <li>{description}</li>
          </ul>
        ))}
      </section>

      <section className={styles.txt__container}>
        <b>Technolgies: </b>
        {techStack.map((technology) => (
          <ul key={technology}>
            <li>{technology}</li>
          </ul>
        ))}
      </section>

      {gitUrl ? (
        <div className={styles.btn__container}>
          <a
            className={styles.single__project__icon}
            href={gitUrl}
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
      {webUrl ? (
        <div className={styles.btn__container}>
          <a
            className={styles.single__project__icon}
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Check out Live</p>
            <div className={styles.single__project__icon__container}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
        </div>
      ) : null}
    </article>
  );
};

export default SingleProject;
