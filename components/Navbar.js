import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavLinkVariants } from "../animations/variants";

const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <motion.h2
        className={styles.logo}
        variants={NavLinkVariants}
        whileHover="hover"
      >
        <Link href="/">mate krezic</Link>
      </motion.h2>
      <div className={styles.navbar__items}>
        <motion.li
          className={styles.navbar__item}
          variants={NavLinkVariants}
          whileHover="hover"
        >
          <Link href="/about">about me</Link>
        </motion.li>
        <motion.li
          className={styles.navbar__item}
          variants={NavLinkVariants}
          whileHover="hover"
        >
          <Link href="/contact">contact me</Link>
        </motion.li>
        <motion.li
          className={styles.navbar__item}
          variants={NavLinkVariants}
          whileHover="hover"
        >
          <Link href="/projects">projects</Link>
        </motion.li>
      </div>
    </div>
  );
};

export default Navbar;
