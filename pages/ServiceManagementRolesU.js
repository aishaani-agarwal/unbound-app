// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";


import React, { useState } from "react";
import Box from "../components/Box";

export default function ServiceManagementRolesU() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout ServiceManagementRolesU>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
         
          <button className="text-cyan-200 text-3xl font-MONO h-16  mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">

          <p className = "text-lime-200">Cashier</p>
        </button>
  
         
          <button className="text-cyan-200 text-3xl font-MONO h-16  mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">

          <p className = "text-lime-200">Construction laborers</p>
        </button>
  
         
          <button className="text-cyan-200 text-3xl font-MONO h-16  mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">

          <p className = "text-lime-200">Security systems</p>
        </button>
  
         
          <button className="text-cyan-200 text-3xl font-MONO h-16  mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">

          <p className = "text-lime-200">Shop management</p>
        </button>
  
      </section>
      
    </Layout>
  );
}
// }
