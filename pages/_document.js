import { Html, Head, Main, NextScript } from 'next/document'
import LadingPageScript from '../components/adminpage/utils/scripts'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <LadingPageScript />
      </body>
    </Html>
  )
}
