import React from 'react'
import Tabelpemesanan from '../../../components/adminpage/formpemesanan/tabelpemesanan'
import Layout from '../../../components/adminpage/utils/layout'
import { useEffect } from 'react'
import { getCookie, validateToken } from '../../../libs/cookie.lib'

export default function index() {
  useEffect(() => {
    if(getCookie('token') === "" && getCookie("username") === ""){
      window.location.href = "/login";
    }else{
      validateToken(getCookie('token')) ? null : window.location.href = "/login";
    }
  }, [])
  return (
    <div>
        <Layout>
            <Tabelpemesanan />
        </Layout>
    </div>
  )
}
