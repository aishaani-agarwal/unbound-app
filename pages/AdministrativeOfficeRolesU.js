// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";


export default function AdministrativeOfficeRolesU() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };


  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout AdministrativeOfficeRolesU>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>

        <a href={"/Microfinance_Officer"}>
         <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
            <p className="text-lime-200">Microfinance Officer</p>
          </button>
        </a>

        <a href={"/Data_Entry_Clerk"}>
         <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
            <p className="text-lime-200">Data Entry Clerk</p>
          </button>
        </a>

         
        
      </section>
    </Layout>
  );
}
// }
