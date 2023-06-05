import React from "react";
import Allproduct from "../../../components/adminpage/formproduct/allproduct";
import Inputproduct from "../../../components/adminpage/formproduct/inputproduct";
import Layout from "../../../components/adminpage/utils/layout";
import { useEffect } from "react";
import { getCookie, validateToken } from "../../../libs/cookie.lib";

export default function Index() {
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
        <Inputproduct />
        <Allproduct />
      </Layout>
    </div>
  );
}
