import React from "react";
import ContactForm from "./ContactForm";
import styles from "../styles/ContactForm.module.css";
import { RightArrowAnimatedSVG } from "./../animations/svg";
import { motion } from "framer-motion";
import { contactComponentVariants } from "../animations/variants";

const ContactComponent = () => {
  return (
    <motion.main
      className={styles.contact__form__container__large}
      variants={contactComponentVariants}
      initial="initial"
      animate="animate"
    >
      <section className={styles.contact__txt__container}>
        <h3>Feel free to contact me!</h3>
        <p>Are you looking for someone reliable?</p>
        <p>Someone ready to work and willing to learn?</p>
        <p>Look no further!</p>
        <div className={styles.svg__div}>
          <RightArrowAnimatedSVG />
        </div>
      </section>
      <ContactForm source="large" />
    </motion.main>
  );
};

export default ContactComponent;
