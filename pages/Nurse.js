import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function nurse() {
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
            NURSE{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Nurses/Wardboys in India assist in patient care and contribute
                to maintaining a clean and organized healthcare environment.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level Nurses/Wardboys earn around INR 10,000 to INR 20,000
                per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, 8-12 hours per day, may include night shifts and
                weekends in healthcare settings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=e9U-r9D6oVw&pp=ygUvOiBCYXNpYyBQYXRpZW50IENhcmUgU2tpbGxzIGZvciBOdXJzZXMvV2FyZGJveXM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic patient care
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=klCCm5annDU&pp=ygUuVXNhZ2Ugb2YgTWVkaWNhbCBFcXVpcG1lbnQgZm9yIE51cnNlcy9XYXJkYm95cw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medical equipment usag
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=klCCm5annDU&pp=ygUuVXNhZ2Ugb2YgTWVkaWNhbCBFcXVpcG1lbnQgZm9yIE51cnNlcy9XYXJkYm95cw%3D%3D
                  https://www.youtube.com/watch?v=_O4B0Nmfr40&pp=ygUZQ2xlYW5saW5lc3MgaW4gSGVhbHRoY2FyZQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hygiene and cleanliness standards
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/hospital-clinic-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hospitals and clinics
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/nursing-home-care-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nursing homes and care facilities
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/healthcare-institution-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthcare institutions
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/rehabilitation-center-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rehabilitation centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/home-healthcare-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home healthcare services
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
