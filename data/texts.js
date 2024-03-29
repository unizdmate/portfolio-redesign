import styles from "../styles/AboutmeComponent.module.css";

export const AboutTextLeft = () => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.border}>Personal info</div>
      </div>
      <p>
        <b>Short bio: </b>Born in Zadar, Croatia on August 24th, 1986. Attended
        "Gimnazija Franje Petrića" high school from 2001 to 2005 and graduated
        with honors. After years spent in online journalism and sales, decided
        to change careers in 2017 and picked web development as future path.
      </p>
      <p>
        <b>About me: </b>Ambitious React developer with passion for learning
        and, more importantly, improving on daily basis. Thorough and precise at
        any given task, with keen interest in technology, web applications and
        user experience. A Great team player with excellent communication skills
        mastered during decade-long career as online journalist and sales
        representative. Very optimistic and enthusiastic about future endeavors
        in web development.
      </p>
    </>
  );
};

export const AboutTextCenter = () => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.border}>Education</div>
      </div>
      <p>
        <b>Degree: </b>Attended University of Zadar from 2017 to 2020 and earned
        bachelor's degree in Information Technologies on October 23rd 2020.
        Developed a full-stack demo web application for Dog Shelter as part of
        final thesis. Internship completed at Lemon Mint d.o.o. based in Zadar.
      </p>
      <p>
        <b>Technologies: </b> HTML, CSS, JavaScript, React.js, Next.js, Styled
        Components, Framer Motion, Apollo Client, GraphQL and Git.
      </p>
    </>
  );
};

export const AboutMeTextRight = () => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.border}>Employment history</div>
      </div>
      <p>
        <b>Freelance online journalist: </b> Mostly working for{" "}
        <a href="https://ezadar.net.hr/info/2022589/impressum/" target="_blank">
          eZadar.hr
        </a>{" "}
        (part of RTL Media Group), contributed to over 3.000 articles related to
        sports, technology and politics from 2009 to 2021.
      </p>
      <p>
        <b>Sales representative: </b> From 2011 to 2015 worked as sales
        representative for Knezak d.o.o., company specialized in mobile devices
        and gadgets sales. Later in 2017 joined the company again, but
        part-time, for another two years working in same position.
      </p>
      <p>
        <b>Head of sales: </b> In the end of 2015 started new job at Aria Nova
        d.o.o., company specialized in HVAC, as head of sales. By the end of the
        contract, decided to enroll to university IT program and terminated
        employment.
      </p>
      <p>
        <b>Software engineer: </b> As of April 2021 employed at DeepIT as
        software engineer.
      </p>
    </>
  );
};
