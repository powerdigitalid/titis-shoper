import { Html, Head, Main, NextScript } from 'next/document'
import AdminPageScript from '../components/adminpage/utils/scripts'
import LadingPageScript from '../components/ladingpage/utils/scripts'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <LadingPageScript />
        <AdminPageScript />
      </body>
    </Html>
  )
}
