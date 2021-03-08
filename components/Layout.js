import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Mate Krezic | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://matekrezic.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mate Krezic | Portfolio" />
        <meta property="og:description" content="Mate Krezic portfolio app" />
        <meta
          property="og:keywords"
          content="Mate Krezic, frontend, web development, zadar"
        />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
