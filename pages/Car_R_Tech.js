import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function car_r_tech() {
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
            CAR REPAIR TECHNICIAN{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                A Car Repair Technician, commonly known as an auto mechanic, is
                responsible for diagnosing, repairing, and maintaining
                automobiles. The role involves working on various aspects of
                vehicles, including engines, transmissions, brakes, electrical
                systems, and other mechanical components. Car Repair Technicians
                may specialize in specific areas, such as engine repair,
                electrical systems, or bodywork.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                The basic salary for a Car Repair Technician in India varies
                based on experience, location, and the employer. On average,
                entry-level technicians can expect a monthly salary ranging from
                INR 15,000 to INR 25,000. With experience and expertise,
                salaries can go up significantly
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Working hours for car repair technicians typically range from 8
                to 10 hours per day, with the possibility of overtime during
                busy periods. Some technicians may also work on weekends,
                depending on the employer's policies and workload.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=hs7bABMtOMI&list=PLyqSpQzTE6M9G2SNxKfsVEjcM9MlJau4F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Knowledge of automotive systems and components
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=6O6Jzrj5HDs&list=PL_qYi3X0_AN5IFMFTvQhwVQpKeWEruDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diagnostic skills to identify issues
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=ws47r89o1a8&pp=ygU1VXNpbmcgUmVwYWlyIFRvb2xzIGFuZCBFcXVpcG1lbnQgaW4gQXV0b21vdGl2ZSBSZXBhaXI%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proficiency in using repair tools and equipment
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/automotive-repair-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Automotive repair shops
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/car-dealership-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Car dealerships
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/fleet-maintenance-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fleet maintenance companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/independent-garage-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Independent garages
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
