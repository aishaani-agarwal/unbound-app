import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function school_bus_driver() {
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
            SCHOOL BUS DRIVER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                School bus drivers in India transport students to and from
                school safely and adhere to traffic and safety regulations.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level school bus drivers earn around INR 12,000 to INR
                20,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time positions, typically with fixed morning
                and afternoon schedules.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=sCXtcXD17qU&list=PLL4evDjFo88t4pK2qmmoEIVlO9ef2SBMh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Traffic rules and safety regulations
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=fbqpQ-AZiyA&pp=ygUyIFZlaGljbGUgTWFpbnRlbmFuY2UgQmFzaWNzIGZvciBTY2hvb2wgQnVzIERyaXZlcnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vehicle maintenance basics{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=IkbckhXiE2Q&pp=ygUuRWZmZWN0aXZlIENvbW11bmljYXRpb24gZm9yIFNjaG9vbCBCdXMgRHJpdmVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Communication with students and school staff
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/school-transportation-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  School transportation services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/school-district-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Local school districts
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/student-transport-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Private transportation companies specializing in student
                  transport
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
