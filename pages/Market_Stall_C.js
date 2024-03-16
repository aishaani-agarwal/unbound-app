import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function market_stall_coordinator() {
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
            MARKET STALL COORDINATOR{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Market Stall Coordinators in India oversee the setup and
                management of market stalls, ensuring smooth operations and
                vendor satisfaction.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level Market Stall Coordinators earn around INR 15,000 to
                INR 25,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time work, depending on market schedules, may
                involve weekends and special events.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=I-XjdcpfXoI&pp=ygUpRXZlbnQgQ29vcmRpbmF0aW9uIGFuZCBMb2dpc3RpY3MgVHV0b3JpYWw%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event coordination and logistics
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=RnfYqAJnbKc&pp=ygUmRWZmZWN0aXZlIFZlbmRvciBNYW5hZ2VtZW50IFN0cmF0ZWdpZXM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Vendor management
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=NNzCegosXu8&pp=ygUgVW5kZXJzdGFuZGluZyBNYXJrZXQgUmVndWxhdGlvbnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Familiarity with market regulations
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/event-management-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event management companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/non-profit-organization-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Non-profit organizations organizing markets
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/festival-fair-organizer-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Festival and fair organizers
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
