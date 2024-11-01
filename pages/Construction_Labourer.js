import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function construction_labourer() {
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
            CONSTRUCTION LABOURER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8 text-center">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>


              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Construction labourers in India assist in various tasks on
                construction sites, including lifting, carrying, and other
                manual work.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level construction labourers earn around INR 8,000 to INR
                15,000 per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8-10 hours per day, may include
                overtime.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=mbwuj58UEPg&pp=ygUlQmFzaWMgQ29uc3RydWN0aW9uIFNpdGUgVGFza3MgVHV0b3JpYQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic construction site tasks
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=FhEWz51YHnE&pp=ygUqSGFuZCBUb29scyBVc2FnZSBmb3IgQ29uc3RydWN0aW9uIExhYm9yZXJz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ability to use hand tools
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=YLH-Ih8omjI&pp=ygUsQWRoZXJpbmcgdG8gU2FmZXR5IFByb3RvY29scyBpbiBDb25zdHJ1Y3Rpb24%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adherence to safety protocols
                </a>{" "}
                <br />{" "}
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/construction-company-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Construction companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/building-contractor-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Building contractors
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/infrastructure-project-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Infrastructure projects
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/real-estate-development-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Real estate development sites
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/road-construction-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Road construction projects
                </a>{" "}
                <br />{" "}
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
