// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";


import React, { useState } from "react";
import Box from "../components/Box";

export default function SalesMarketingL() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout SalesMarketingL>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-4xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
         
                       <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">

          <p className = "text-lime-200">Microfinance Officer</p>
          </button>
          
         
                     <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">

          <p className = "text-lime-200">Data Entry Clerk</p>
          </button>
          
      </section>
      
    </Layout>
  );
}
// }
