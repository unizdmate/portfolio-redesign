import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Mate Krezic | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
        <link rel="stylesheet" href="../styles/Home.module.css" />
        <link rel="stylesheet" href="../styles/HomeComponent.module.css" />
        <link rel="stylesheet" href="../styles/Navbar.module.css" />
        <link rel="stylesheet" href="../styles/ProjectsList.module.css" />
        <link rel="stylesheet" href="../styles/SingleProject.module.css" />
        <link rel="stylesheet" href="../styles/AboutmeComponent.module.css" />
        <link rel="stylesheet" href="../styles/ContactForm.module.css" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
