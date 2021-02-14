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

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

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
