import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";
import Gototop from "./gototop";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Titis Shoper</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div id="page">
        <Navbar />
        {children}
        <Footer />
        <Gototop />
      </div>
    </div>
  );
}
