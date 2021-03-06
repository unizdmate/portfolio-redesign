import styles from "../styles/SingleProject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SingleProject = ({ project }) => {
  const { id, employer, client, jobDescription, techStack, url } = project;

  return (
    <article className={styles.single__project}>
      <div className={styles.single__project__employer}>
        <h3>{employer}</h3>
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
    </article>
  );
};

export default SingleProject;
