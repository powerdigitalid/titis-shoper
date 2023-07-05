import Intro from '../components/ladingpage/utils/intro'
import Layout from '../components/ladingpage/utils/layout'
import Head from 'next/head'
import Partner from '../components/ladingpage/utils/partner'
import Produk from '../components/ladingpage/produk/produk'
// import Produk from '../components/ladingpage/utils/produk'
import Banner from '../components/ladingpage/utils/banner'
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  if(session){
    return (
      <>
      <Head>
        <title>Welcome {session.user.name} </title>
      </Head>
        <Layout>
          <Banner />
          <Intro />
          <Produk />
          <Partner />
        </Layout>
        
        
      </>
    )
  } else {
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
}
