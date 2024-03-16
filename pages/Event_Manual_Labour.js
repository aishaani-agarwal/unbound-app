import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function event_m_labour() {
  const handleGoBack = () => {
    router.back();
  };
return (
    <Layout>
      <Head>
         
      </Head>
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            EVENT MANUAL LABOUR
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Event manual laborers in India provide physical support for
                event setup, teardown, and various tasks during events.
              </p>
            </h3>


            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level event manual laborers earn around INR 8,000 to INR
                15,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time work, varying based on event schedules,
                including weekends and evenings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Physical fitness for manual tasks <br />
                * Ability to follow setup instructions <br />
                * Teamwork and coordination skills <br />{" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/event-management-jobs" target="_blank" rel="noopener noreferrer">Event management companies</a> <br />
  * <a href="https://www.naukri.com/convention-exhibition-jobs" target="_blank" rel="noopener noreferrer">Convention and exhibition centers</a> <br />
  * <a href="https://www.naukri.com/wedding-event-jobs" target="_blank" rel="noopener noreferrer">Wedding and event venues</a> <br />
  * <a href="https://www.naukri.com/catering-hospitality-jobs" target="_blank" rel="noopener noreferrer">Catering and hospitality services</a> <br />
  * <a href="https://www.naukri.com/entertainment-production-jobs" target="_blank" rel="noopener noreferrer">Entertainment and production companies</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

