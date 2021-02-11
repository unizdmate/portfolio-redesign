import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <h2 className={styles.logo}>mate krezic</h2>
      <div className={styles.navbar__items}>
        <li className={styles.navbar__item}>about me</li>
        <li className={styles.navbar__item}>projects</li>
        <li className={styles.navbar__item}>contact me</li>
      </div>
    </div>
  );
};

export default Navbar;
