import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function fast_food_sp() {
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
            FAST FOOD SERVICE POSITION{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Fast food service positions in India involve taking orders,
                preparing food, and serving customers in a quick-service
                restaurant.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level fast food service positions earn around INR 8,000 to
                INR 15,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time positions, typically 6-8 hours per shift,
                may include weekends and evenings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=_vTZI1s2SFs&pp=ygUdRmFzdCBGb29kIE1lbnUgSXRlbXMgVHV0b3JpYWw%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fast food menu items
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=1gJRzeiUd6s&pp=ygUuQ2FzaCBIYW5kbGluZyBUZWNobmlxdWVzIGZvciBGYXN0IEZvb2QgV29ya2Vycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cash handling
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=4AZzAvy4Kck&pp=ygUnQ3VzdG9tZXIgU2VydmljZSBFdGlxdWV0dGUgaW4gRmFzdCBGb29k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer service etiquette{" "}
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/fast-food-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fast-food chains
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/quick-service-restaurant-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quick-service restaurants
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/food-court-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food courts in malls
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/takeaway-delivery-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Takeaway and delivery services
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
