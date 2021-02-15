import Router from "next/router";
import emailjs from "emailjs-com";
import { USER_ID, ACCESS_TOKEN, SERVICE_ID, TEMPLATE_ID } from "../utils/keys";
import styles from "../styles/ContactForm.module.css";
import { motion } from "framer-motion";
import { btnVariants } from "../animations/variants";

const ContactForm = ({ source }) => {
  const routeTo = (result) => {
    Router.push({
      pathname: "/",
    });
  };

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        routeTo(result);
      });
    (error) => {
      console.log(error.text);
    };
    e.target.reset();
  };
  return (
    <main
      className={styles.contact__container}
      onContextMenu={(e) => e.preventDefault()}
    >
      <form className={styles.contact__form} method="post" onSubmit={sendMail}>
        <fieldset
          className={
            source === "large"
              ? styles.contact__fieldset__large
              : styles.contact__fieldset
          }
        >
          <input
            className={
              source === "large"
                ? styles.contact__input__large
                : styles.contact__input
            }
            type="text"
            name="sender_name"
            placeholder="Your name"
            required
          ></input>
          <input
            className={
              source === "large"
                ? styles.contact__input__large
                : styles.contact__input
            }
            type="email"
            name="sender_email"
            placeholder="Your e-mail address"
            required
          ></input>
          <input
            className={
              source === "large"
                ? styles.contact__input__large
                : styles.contact__input
            }
            type="text"
            name="message_subject"
            placeholder="Message subject"
            required
          ></input>
          <textarea
            className={
              source === "large"
                ? styles.contact__txt__area__large
                : styles.contact__txt__area
            }
            name="message"
            placeholder="Your message here..."
            required
          ></textarea>
        </fieldset>
        <motion.button
          className={
            source === "large" ? styles.submit__btn__large : styles.submit__btn
          }
          variants={btnVariants}
          whileHover="hover"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
    </main>
  );
};

export default ContactForm;
