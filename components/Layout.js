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
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Frontend, Web Development, React js, HTML, CSS, JavaScript, Mate Krezic"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mate Krezic" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
