import React from "react";
import ContactForm from "./ContactForm";
import styles from "../styles/ContactForm.module.css";
import { DarkAnimatedSVG, RightArrowAnimatedSVG } from "./../animations/svg";

const ContactComponent = () => {
  return (
    <div className={styles.contact__form__container__large}>
      <div className={styles.contact__txt__container}>
        <h3>Feel free to contact me!</h3>
        <p>Are you looking for someone reliable?</p>
        <p>Someone ready to work and willing to learn?</p>
        <p>Look no further!</p>
        <div className={styles.svg__div}>
          <RightArrowAnimatedSVG />
        </div>
      </div>
      <ContactForm type="large" />
    </div>
  );
};

export default ContactComponent;
