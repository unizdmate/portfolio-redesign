import styles from "../styles/SingleProject.module.css";

const SingleProject = ({ project }) => {
  const { id, employer, client, jobDescription, techStack, url } = project;

  return (
    <div className={styles.single__project}>
      <div className={styles.single__project__employer}>
        <h3>{employer}</h3>
      </div>
      <div className={styles.single__project__client}>
        <h4>Client: {client}</h4>
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
          <a href={url} target="_blank" rel="noopener noreferrer">
            Check out on GitHub
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProject;
