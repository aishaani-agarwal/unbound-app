// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

import React, { useState } from "react";
import Box from "../components/Box";

export default function ProblemSolvingL() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout ProblemSolvingL>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-4xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECOMMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>

        <a href={"/Warehouse_Worker"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Warehouse manager</p>
        </button>
        </a>

        <a href={"/Packaging_A"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Packaging assistant</p>
        </button>
        </a>

        <a href={"/Kitchen_A"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Kitchen assistants</p>
        </button>
        </a>

        <a href={"/Delivery_Driver"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Delivery Driver</p>
        </button>
        </a>

        <a href={"/Customer_S_R"}>
        <button className="text-lime-200 text-xl font-serif mt-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 ...">
          <p className="text-lime-200">Customer Service Representative</p>
        </button>
        </a>

      </section>
    </Layout>
  );
}
// }
