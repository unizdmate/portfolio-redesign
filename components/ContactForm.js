import styles from "../styles/ContactForm.module.css";
import { motion } from "framer-motion";
import { btnVariants } from "../animations/variants";

const ContactForm = () => {
  return (
    <div className={styles.contact__container}>
      <form className={styles.contact__form}>
        <fieldset className={styles.contact__fieldset}>
          <input
            className={styles.contact__input}
            type="text"
            name="sender_name"
            placeholder="Your name"
            required
          ></input>
          <input
            className={styles.contact__input}
            type="email"
            name="sender_email"
            placeholder="Your e-mail address"
            required
          ></input>
          <input
            className={styles.contact__input}
            type="text"
            name="message_subject"
            placeholder="Message subject"
            required
          ></input>
          <textarea
            className={styles.contact__txt__area}
            name="message"
            placeholder="Your message here..."
            required
          ></textarea>
        </fieldset>
        <motion.div
          className={styles.submit__btn}
          variants={btnVariants}
          whileHover="hover"
        >
          Submit
        </motion.div>
      </form>
    </div>
  );
};

export default ContactForm;
