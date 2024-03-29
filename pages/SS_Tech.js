import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ss_tech() {
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
            SECURITY SYSTEMS TECHNICIAN{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Security systems technicians in India install, maintain, and
                troubleshoot electronic security systems such as CCTV, access
                control, and alarms.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level security systems technicians earn around INR 18,000
                to INR 30,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, typically 8 hours per day, may involve on-call
                duty and irregular hours for system installations.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=qDuXFxWEjb4&pp=ygUpVW5kZXJzdGFuZGluZyBFbGVjdHJvbmljIFNlY3VyaXR5IFN5c3RlbXM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronic security systems
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=AQ1EPl_4O2w&pp=ygUrV2lyaW5nIGFuZCBDb25uZWN0aXZpdHkgaW4gU2VjdXJpdHkgU3lzdGVtcw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wiring and connectivity
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=SK8D1bdJh7s&pp=ygU2cm91Ymxlc2hvb3RpbmcgU2tpbGxzIGZvciBTZWN1cml0eSBTeXN0ZW1zIFRlY2huaWNpYW5z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Troubleshooting skills{" "}
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/security-system-integration-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Security system integration firms
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/surveillance-alarm-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Surveillance and alarm companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/technology-retail-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technology and electronics retailers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/facilities-management-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facilities management companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/corporate-security-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporate security departments
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
