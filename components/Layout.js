import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Mate Krezic | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://matekrezic.vercel.app/" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:image" content="/cover.jpg" key="ogimage" />
        <meta
          property="og:site_name"
          content="Mate Krezic | Portfolio"
          key="ogsitename"
        />
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Mate Krezic portfolio & CV app. Developed in Zadar with ❤"
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
