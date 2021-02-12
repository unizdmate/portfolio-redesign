import React from "react";
import styles from "../styles/HomeComponent.module.css";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { motion } from "framer-motion";
import { LightAnimatedSVG, DarkAnimatedSVG } from "../animations/svg";
import {
  LeadImgVariants,
  BtnVariants,
  HomePageFadeInVariants,
} from "../animations/variants";

const HomeComponent = () => {
  return (
    <>
      <div className={styles.lead__img__container}>
        <motion.div
          className={styles.lead__img__caption}
          variants={LeadImgVariants}
          initial="initial"
          animate="animate"
        >
          <div className={styles.border}>Front End Development done right!</div>
        </motion.div>
      </div>

      <section className={styles.about__section}>
        <h2>About me</h2>
        <p>
          Ambitious React developer with passion for learning and, more
          importantly, improving on daily basis, looking to join a team of
          like-minded coleagues. Thorough and precise at any given task, with
          keen interest in technology, web applications and user experience.
        </p>
        <motion.div
          className={styles.about__btn}
          variants={BtnVariants}
          whileHover="hover"
        >
          <Link href="/about">Read more</Link>
        </motion.div>
      </section>

      <div className={styles.contact__img__container}>
        <div className={styles.contact__img__caption}>
          <div className={styles.border}>Feel free to contact me!</div>
        </div>
      </div>

      <section className={styles.contact__section}>
        <div className={styles.txt__container}>
          <LightAnimatedSVG />
          <p>Are you looking for someone reliable?</p>
          <p>Someone ready to work and willing to learn?</p>
          <p>Look no further!</p>
          <LightAnimatedSVG />
        </div>
        <ContactForm />
      </section>

      <div className={styles.projects__img__container}>
        <div className={styles.projects__img__caption}>
          <div className={styles.border}>Check out my previous projects</div>
        </div>
      </div>

      <section className={styles.projects__section}>
        <DarkAnimatedSVG />
        <p>
          All the projects I've ever worked on in one place, including college
          final thesis and personal projects.
        </p>
        <p>Feel free to check them out!</p>
        <DarkAnimatedSVG />
        <motion.div
          className={styles.projects__btn}
          variants={BtnVariants}
          whileHover="hover"
        >
          <Link href="/projects">Projects</Link>
        </motion.div>
      </section>

      <div className={styles.closing__img__container}>
        <div className={styles.closing__img__caption}>
          <div className={styles.border}>Front End Development done right!</div>
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
