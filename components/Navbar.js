import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <h2 className={styles.logo}>
        <Link href="/">mate krezic</Link>
      </h2>
      <div className={styles.navbar__items}>
        <li className={styles.navbar__item}>
          <Link href="/about">about me</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link href="/contact">contact me</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link href="/projects">projects</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
