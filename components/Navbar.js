import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinkVariants, navbarVariants } from "../animations/variants";

const Navbar = () => {
  return (
    <motion.nav
      className={styles.navbar__container}
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <Link href="/">
        <motion.h2
          className={styles.logo}
          variants={navLinkVariants}
          whileHover="hover"
        >
          <span aria-hidden="true">mate krezic</span>
          mate krezic
          <span aria-hidden="true">mate krezic</span>
        </motion.h2>
      </Link>
      <section className={styles.navbar__items}>
        <Link href="/about">
          <motion.li
            className={styles.navbar__item}
            variants={navLinkVariants}
            whileHover="hover"
          >
            about me
          </motion.li>
        </Link>
        <Link href="/contact">
          <motion.li
            className={styles.navbar__item}
            variants={navLinkVariants}
            whileHover="hover"
          >
            contact me
          </motion.li>
        </Link>
        <Link href="/projects">
          <motion.li
            className={styles.navbar__item}
            variants={navLinkVariants}
            whileHover="hover"
          >
            projects
          </motion.li>
        </Link>
      </section>
    </motion.nav>
  );
};

export default Navbar;
