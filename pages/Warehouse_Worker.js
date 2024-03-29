import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function warehouse_worker() {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            WAREHOUSE WORKER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Warehouse workers in India handle tasks related to the storage,
                organization, and movement of goods within a warehouse facility.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level warehouse workers earn around INR 8,000 to INR
                15,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, typically 8-10 hours per day, may involve
                rotating shifts and overtime during peak periods.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=n71eTqT1ne8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic inventory procedures
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=yPX_ietsacg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safe use of warehouse equipment
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=65rpWadKLxc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Attention to detail for order accuracy
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/distribution-center-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Distribution centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/logistics-supply-chain-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Logistics and supply chain companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/ecommerce-fulfillment-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-commerce fulfillment centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/manufacturing-warehouse-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manufacturing and production warehouses
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/retail-warehouse-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Retail and wholesale warehouse facilities
                </a>{" "}
                <br />
              </p>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
