import Intro from '../components/ladingpage/utils/intro'
import Layout from '../components/ladingpage/utils/layout'
import Partner from '../components/ladingpage/utils/partner'
import Produk from '../components/ladingpage/produk/produk'
import Banner from '../components/ladingpage/utils/banner'

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Intro />
        <Produk />
        <Partner />
      </Layout>
      
      
    </>
  )
}
