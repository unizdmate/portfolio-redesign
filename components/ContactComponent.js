import React from "react";
import ContactForm from "./ContactForm";
import styles from "../styles/ContactForm.module.css";
import { RightArrowAnimatedSVG } from "./../animations/svg";
import { motion } from "framer-motion";
import { contactComponentVariants, btnVariants } from "../animations/variants";
import {
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactComponent = () => {
  return (
    <motion.main
      className={styles.page__wrapper}
      variants={contactComponentVariants}
      initial="initial"
      animate="animate"
    >
      <div className={styles.title}>
        <div className={styles.border}>Feel free to contact me!</div>
      </div>
      <div className={styles.contact__form__container__large}>
        <section className={styles.contact__txt__container}>
          <p>Are you looking for someone reliable?</p>
          <p>Someone ready to work and willing to learn?</p>
          <p>Look no further!</p>
          <section className={styles.icons__container}>
            <motion.a
              className={styles.single__icon}
              variants={btnVariants}
              whileHover="hover"
              href="https://www.instagram.com/matekrezic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </motion.a>

            <motion.a
              className={styles.single__icon}
              variants={btnVariants}
              whileHover="hover"
              href="https://twitter.com/MateKrezic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </motion.a>

            <motion.a
              className={styles.single__icon}
              variants={btnVariants}
              whileHover="hover"
              href="https://hr.linkedin.com/in/mate-krezi%C4%87-711731140"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
          </section>
          <div className={styles.svg__div}>
            <RightArrowAnimatedSVG />
          </div>
        </section>
        <ContactForm source="large" />
      </div>
    </motion.main>
  );
};

export default ContactComponent;
