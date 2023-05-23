import Head from "next/head";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Dashboard</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="shortcut icon" href="/dist/img/logo/logos.png" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              {children}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
