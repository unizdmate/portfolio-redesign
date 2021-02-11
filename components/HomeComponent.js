import React from "react";
import styles from "../styles/HomeComponent.module.css";

const HomeComponent = () => {
  return (
    <>
      <div className={styles.lead__img__container}>
        <div className={styles.lead__img__caption}>
          <span className={styles.border}>Front End Development</span>
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
