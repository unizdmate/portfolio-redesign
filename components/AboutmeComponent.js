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
import {
  aboutItemsLeftVariants,
  aboutItemsCenterVariants,
  aboutItemsRightVariants,
  personContainerVariants,
  btnVariants,
} from "../animations/variants";
import {
  AboutTextLeft,
  AboutTextCenter,
  AboutMeTextRight,
} from "../data/texts";

const AboutmeComponent = () => {
  return (
    <motion.main className={styles.aboutme__page}>
      <article className={styles.aboutme__container}>
        <section className={styles.aboutme__items}>
          <motion.div
            className={styles.aboutme__items__left}
            variants={aboutItemsLeftVariants}
            initial="initial"
            animate="animate"
          >
            <AboutTextLeft />
          </motion.div>
        </section>

        <section className={styles.aboutme__items}>
          <motion.div
            className={styles.aboutme__items__center}
            variants={aboutItemsCenterVariants}
            initial="initial"
            animate="animate"
          >
            <AboutTextCenter />
          </motion.div>
        </section>

        <section className={styles.aboutme__items}>
          <motion.div
            className={styles.aboutme__items__right}
            variants={aboutItemsRightVariants}
            initial="initial"
            animate="animate"
          >
            <AboutMeTextRight />
          </motion.div>
        </section>
      </article>

      <motion.section
        className={styles.aboutme__personal__container}
        variants={personContainerVariants}
        initial="initial"
        animate="animate"
      >
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

        <Link href="/contact">
          <motion.div
            className={styles.contact__btn}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            variants={btnVariants}
            whileHover="hover"
          >
            Feel free to contact me!
          </motion.div>
        </Link>

        <section className={styles.aboutme__icons__container}>
          <motion.a
            className={styles.aboutme__icon}
            variants={btnVariants}
            whileHover="hover"
            href="https://www.instagram.com/matekrezic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </motion.a>

          <motion.a
            className={styles.aboutme__icon}
            variants={btnVariants}
            whileHover="hover"
            href="https://twitter.com/MateKrezic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </motion.a>

          <motion.a
            className={styles.aboutme__icon}
            variants={btnVariants}
            whileHover="hover"
            href="https://hr.linkedin.com/in/mate-krezi%C4%87-711731140"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
        </section>
      </motion.section>
    </motion.main>
  );
};

export default AboutmeComponent;
