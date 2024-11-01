import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function driver() {
  const handleGoBack = () => {
    router.back();
  };
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div className="w-full md:pl-72">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200 text-center md:-mt-32 mt-16">
            DRIVER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200  mb-8 text-center">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Drivers in India operate vehicles to transport goods or
              passengers, ensuring safe and timely journeys.
            </p>

            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Entry-level drivers earn around INR 12,000 to INR 20,000 per
              month, varying by the type of vehicle and employer.
            </p>

            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-cyan-400">
              Time Consumption
            </h3>
            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Full-time work, typically 8-12 hours per day, may involve
              irregular hours or long-distance travel.
            </p>

            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-yellow-100	">
              Basic Knowledge
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=NLWlZdaEoMY&list=PL2ZduCrEeD5zE7vLmGWpXb-UGLXcq07pc"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Traffic rules and regulations
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=Iwo4sFjbQqY&pp=ygUrU2FmZSBEcml2aW5nIFByYWN0aWNlcyBmb3IgRGVsaXZlcnkgRHJpdmVycw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basic vehicle maintenance
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=BjX79GsALd8&pp=ygUuQmFzaWMgVmVoaWNsZSBNYWludGVuYW5jZSBmb3IgRGVsaXZlcnkgRHJpdmVycw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Route navigation skills{" "}
              </a>{" "}
              <br />
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>
            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.naukri.com/ride-hailing-driver-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ride-hailing services
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/logistics-delivery-driver-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Logistics and delivery companies
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/commercial-transport-driver-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commercial transport services
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/chauffeur-driver-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corporate or private chauffeur services
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/government-transportation-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Government agencies (for public transportation)
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
