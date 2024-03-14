import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function BlindDeaf() {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const router = useRouter();

  const handleButtonClick = (value) => {
    setSelectedOption(value);
    if (value === "Technical") {
      router.push("/TechnicalBD");
    } else if (value === "Service") {
      router.push("/ServiceBD");
    } else if (value === "Problem Solving") {
      router.push("/ProblemSolvingBD");
    } else if (value === "Sales and Marketing") {
      router.push("/SalesMarketingBD");
    } else if (value === "Education and Administration") {
      router.push("/EducationAdministrationBD");
    }
  };

  const BlindDeafOptions = [
    { label: "Technical", value: "Technical" },
    { label: "Service", value: "Service" },
    { label: "Problem Solving", value: "Problem Solving" },
    { label: "Sales and Marketing", value: "Sales and Marketing" },
    { label: "Education and Administration", value: "Education and Administration" },
  ];

  return (
    <Layout BlindDeaf>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center tracking-wide pb-8">
          Question 3
        </h1>

        <h1 className="text-cyan-200 font-serif text-2xl text-center tracking-wide">
          Which skill do you have best?
        </h1>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {BlindDeafOptions.map((option) => (
            <button
              key={option.value}
              className={`border-4 px-4 py-2 text-lime-200 hover:bg-zinc-800 hover:text-white transition duration-300 ${
                selectedOption === option.value ? "bg-zinc-800 text-white" : ""
              }`}
              onClick={() => handleButtonClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </Layout>
  );
}
