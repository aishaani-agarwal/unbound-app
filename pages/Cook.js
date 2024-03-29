import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function cook() {
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
            COOK{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Cooks in India prepare and cook meals, ensuring the quality and
                taste of dishes.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level cooks earn around INR 10,000 to INR 20,000 per
                month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time, 8-10 hours per day, may include weekends and peak
                meal times.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=BHcyuzXRqLs&pp=ygUbQ29va2luZyBUZWNobmlxdWVzIFR1dG9yaWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cooking techniques{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=BHcyuzXRqLs&pp=ygUbQ29va2luZyBUZWNobmlxdWVzIFR1dG9yaWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recipe following
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=Ddn1W3Rp-Fk&pp=ygUlIEtpdGNoZW4gU2FmZXR5IGFuZCBIeWdpZW5lIFByYWN0aWNlcw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kitchen safety and hygiene{" "}
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/restaurant-cafe-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurants and cafes
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/hotel-resort-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hotels and resorts
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/catering-services-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Catering services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/food-beverage-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food and beverage establishments
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/cafeteria-canteen-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cafeterias and canteens
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
