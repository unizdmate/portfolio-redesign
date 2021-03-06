import Layout from "../components/Layout";
import "../styles/AboutmeComponent.module.css";
import "../styles/ContactForm.module.css";
import "../styles/Home.module.css";
import "../styles/HomeComponent.module.css";
import "../styles/Navbar.module.css";
import "../styles/ProjectsList.module.css";
import "../styles/SingleProject.module.css";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import HomeComponent from "./../components/HomeComponent";
import AboutmeComponent from "./../components/AboutmeComponent";
import ContactComponent from "./../components/ContactComponent";
import ProjectsComponent from "./../components/ProjectsComponent";

//Importing all the componets in _app.js, that are rendered in /pages
//without actually rendering them in _app.js solves the problem of
//CSS glimmer on page transitions

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
