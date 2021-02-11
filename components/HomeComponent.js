import React from "react";
import styles from "../styles/HomeComponent.module.css";

const HomeComponent = () => {
  return (
    <>
      <div className={styles.lead__img__container}>
        <div className={styles.lead__img__caption}>
          <span className={styles.border}>
            Front End Development done right!
          </span>
        </div>
      </div>

      <section className={styles.about__section}>
        <h2>About me</h2>
        <p>
          Ambitious React developer with passion for learning and, more
          importantly, improving on daily basis, looking to join a team of
          like-minded coleagues. Thorough and precise at any given task, with
          keen interest in technology, web applications and user experience.
        </p>
        <div className={styles.about__btn}>Read more</div>
      </section>

      <div className={styles.contact__img__container}>
        <div className={styles.contact__img__caption}>
          <span className={styles.border}>Feel free to contact me!</span>
        </div>
      </div>

      <section className={styles.contact__section}>
        <div className={styles.txt__container}>
          <p>Are you looking for someone reliable?</p>
          <p>Someone ready to work and willing to learn?</p>
          <p>Look no further!</p>
        </div>
      </section>

      <div className={styles.projects__img__container}>
        <div className={styles.projects__img__caption}>
          <span className={styles.border}>Check out my previous projects</span>
        </div>
      </div>

      <section className={styles.projects__section}>
        <p>
          THIS IS WHERE THE PROJECTS BUTTON GOES Vestibulum eu risus arcu.
          Vivamus faucibus dolor quis ex luctus, eu vestibulum felis commodo.
          Proin in justo vel justo ornare pretium. Nam sed varius enim. Fusce
          fringilla fringilla arcu, at finibus metus efficitur ac.
        </p>
      </section>
    </>
  );
};
export default HomeComponent;
