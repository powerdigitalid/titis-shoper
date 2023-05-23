import Intro from '../components/ladingpage/utils/intro'
import Layout from '../components/ladingpage/utils/layout'
import Partner from '../components/ladingpage/utils/partner'
import Produk from '../components/ladingpage/utils/produk'

export default function Home() {
  return (
    <>
      <Layout>
        <Intro />
        <Produk />
        <Partner />
      </Layout>
      
      
    </>
  )
}
