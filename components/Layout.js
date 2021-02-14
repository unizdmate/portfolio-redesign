import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Mate Krezic | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
