import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function masseuse() {
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
        <div className="w-full md:pl-96">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200 text-center md:-mt-32 mt-16">
            MASSEUSE{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8 text-center">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-mleading-relaxed  text-balance ...">
                Masseuse in India provide massage therapy to clients for
                relaxation and therapeutic purposes.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-mleading-relaxed  text-balance ...">
                Entry-level masseuse earn around INR 8,000 to INR 15,000 per
                month
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-mleading-relaxed  text-balance ...">
                Varies based on appointments, typically part-time or flexible
                hours
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

              <p className="text-white mb-8 text-mleading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=1sr8jubMsi0&pp=ygUdOiBNYXNzYWdlIFRlY2huaXF1ZXMgVHV0b3JpYWw%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Massage techniques
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=yr2-rMt0gAg&pp=ygUrQW5hdG9teSBhbmQgUGh5c2lvbG9neSBCYXNpY3MgZm9yIE1hc3NldXNlcw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anatomy and physiology basics{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=2wKaV1CEHpI&pp=ygUlRWZmZWN0aXZlIENvbW11bmljYXRpb24gZm9yIE1hc3NldXNlcw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client communication skills
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-mleading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/spa-wellness-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spa and wellness centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/massage-therapy-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Massage therapy clinics
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/resort-hotel-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resorts and hotels
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/fitness-health-club-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fitness and health clubs
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
