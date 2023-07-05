import React from 'react'
import Cart from '../../../components/ladingpage/cart/cart'
import Layout from '../../../components/ladingpage/utils/layout'
import {useSession, signIn} from 'next-auth/react'

export default function index() {
  const {data: session, status} = useSession();
  if(session){
    return (
      <>
        <Layout>
          <Cart />
        </Layout>
      </>
    )
  } else {
    signIn();
  }
}
