import Layout, { siteTitle } from "../components/Layout";
import Head from "next/head";

export default function pet_caretaker() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            PET CARETAKER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Pet caretakers in India provide care and attention to pets in
                the absence of their owners, ensuring their well-being and
                happiness.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level pet caretakers earn around INR 8,000 to INR 15,000
                per month, depending on responsibilities and hours.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time work, with hours varying based on
                clients' needs and pet care requirements.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Understanding of different pet breeds and their needs <br />
                * Basic knowledge of pet first aid  <br />
                * Ability to handle and manage pets safely <br />
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Pet care services and businesses  <br />
                * Freelance or self-employed pet caretakers  <br />
                * Pet grooming salons  <br />
                * Veterinary clinics with boarding facilities  <br />
                * Referrals and word-of-mouth from local pet owners <br />
                {" "}
              </p>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}