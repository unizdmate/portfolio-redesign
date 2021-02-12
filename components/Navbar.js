import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinkVariants } from "../animations/variants";

const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <Link href="/">
        <motion.h2
          className={styles.logo}
          variants={navLinkVariants}
          whileHover="hover"
        >
          mate krezic
        </motion.h2>
      </Link>
      <div className={styles.navbar__items}>
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
      </div>
    </div>
  );
};

export default Navbar;
