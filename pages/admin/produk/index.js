import React from "react";
import Allproduct from "../../../components/adminpage/formproduct/allproduct";
import Inputproduct from "../../../components/adminpage/formproduct/inputproduct";
import Layout from "../../../components/adminpage/utils/layout";

export default function Index() {
  return (
    <div>
      <Layout>
        <Inputproduct />
        <Allproduct />
      </Layout>
    </div>
  );
}
