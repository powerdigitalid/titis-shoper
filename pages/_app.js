import '../styles/globals.css'
// ladingpages css
import '../public/dist/css/bootstrap.min.css'
import '../public/dist/css/animate.css'
import '../public/dist/css/bootstrap-datepicker.css'
import '../public/dist/css/flexslider.css'
import '../public/dist/css/icomoon.css'
import '../public/dist/css/ionicons.min.css'
import '../public/dist/css/magnific-popup.css'
import '../public/dist/css/owl.carousel.min.css'
import '../public/dist/css/owl.theme.default.min.css'
import '../public/dist/css/style.css'
import '../public/dist/fonts/flaticon/font/flaticon.css'

// admin css
import '../public/dist/admin/css/ruang-admin.min.css'

//toastify
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

//session provider
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return <>
  <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  <ToastContainer />
  </>
}
