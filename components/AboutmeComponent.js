import Image from "next/image";
import Link from "next/link";
import styles from "../styles/AboutmeComponent.module.css";
import { motion } from "framer-motion";
import {
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutmeComponent = () => {
  return (
    <motion.div className={styles.aboutme__page}>
      <div className={styles.aboutme__container}>
        <div className={styles.aboutme__items}>
          <div className={styles.aboutme__items__left}>
            <h3>Personal info</h3>
            <p>
              <b>Short bio: </b>Born in Zadar, Croatia on August 24th, 1986.
              Attended "Gimnazija Franje Petrića" high school from 2001 to 2005
              and graduated with honors. After years spent in online journalism
              and sales, decided to change careers in 2017 and picked web
              development as future path.
            </p>
            <p>
              <b>About me: </b>Ambitious React developer with passion for
              learning and, more importantly, improving on daily basis, looking
              to join a team of like-minded coleagues. Thorough and precise at
              any given task, with keen interest in technology, web applications
              and user experience. A Great team player with excellent
              communication skills mastered during decade-long career as online
              journalist and sales representative. Very optimistic and
              enthusiastic about future endeavors in web development.
            </p>
          </div>
        </div>
        <div className={styles.aboutme__items}>
          <div className={styles.aboutme__items__center}>
            <h3>Education</h3>
            <p>
              <b>Degree: </b>Attended University of Zadar from 2017 to 2020 and
              earned bachelor's degree in Information Technologies on October
              23rd 2020. Developed a full-stack demo web application for Dog
              Shelter as part of final thesis. Internship completed at Lemon
              Mint d.o.o. based in Zadar.
            </p>
            <p>
              <b>Technologies: </b> HTML, CSS, JavaScript, React.js, Next.js,
              Styled Components, Framer Motion, React Modal, Apollo Client and
              GraphQL.
            </p>
          </div>
        </div>
        <div className={styles.aboutme__items}>
          <div className={styles.aboutme__items__right}>
            <h3>Employment history</h3>
            <p>
              <b>Freelance online journalist: </b> Mostly working for
              <a
                href="https://ezadar.net.hr/info/2022589/impressum/"
                target="_blank"
              >
                eZadar.hr
              </a>
              (part of RTL Media Group), contributed to over 3.000 articles
              related to sports, technology and politics. To this day still
              writing on daily basis and working as part-time deputy editor in
              chief.
            </p>
            <p>
              <b>Sales representative: </b> From 2011 to 2015 worked as sales
              representative for Knezak d.o.o., company specialized in mobile
              devices and gadgets sales. Later in 2017 joined the company again,
              but part-time, for another two years working in same position.
            </p>
            <p>
              <b>Head of sales: </b> In the end of 2015 started new job at Aria
              Nova d.o.o., company specialized in HVAC, as head of sales. By the
              end of the contract, decided to enroll to university IT program
              and terminated employment.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutme__personal__container}>
        <div className={styles.aboutme__img__container}>
          <Image
            src="/profile.jpg"
            alt="Picture of the author"
            width={200}
            height={200}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <p>
          <i>Mate Krezic, at your service</i>
        </p>
        <div
          className={styles.contact__btn}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        >
          <Link href="/contact">Feel free to contact me!</Link>
        </div>
        <div className={styles.aboutme__icons__container}>
          <a
            className={styles.aboutme__icon}
            href="https://www.instagram.com/matekrezic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>

          <a
            className={styles.aboutme__icon}
            href="https://twitter.com/MateKrezic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>

          <a
            className={styles.aboutme__icon}
            href="https://hr.linkedin.com/in/mate-krezi%C4%87-711731140"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutmeComponent;
