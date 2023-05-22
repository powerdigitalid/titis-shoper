import Intro from '../components/adminpage/utils/intro'
import Layout from '../components/adminpage/utils/layout'
import Partner from '../components/adminpage/utils/partner'
import Produk from '../components/adminpage/utils/produk'

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
