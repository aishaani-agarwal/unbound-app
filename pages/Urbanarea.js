// // pages/Question1.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

import { useRouter } from "next/router";
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function Urbanarea() {
  // const [textBoxValue, setTextBoxValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // State for dropdown value
  const router = useRouter();

  // const handleTextBoxChange = (e) => {
  //   setTextBoxValue(e.target.value);8
  // };

  const handleDropdownChange = (selectedOption) => {
    setDropdownValue(selectedOption);
  };

  const UrbanareaOptions = [
    { label: "Technical", value: "Technical" },
    { label: "Service", value: "Service" },
    { label: "Problem Solving", value: "Problem Solving" },
    { label: "Sales and Marketing", value: "Sales and Marketing" },
    {
      label: "Education and Administration",
      value: "Education and Administration",
    },
  ];

  const handleSubmit = () => {
    if (dropdownValue === "Technical") {
      router.push("/TechnicalU");
    } else if (dropdownValue === "Service") {
      router.push("/ServiceU");
    } else if (dropdownValue === "Problem Solving") {
      router.push("/ProblemSolvingU");
    } else if (dropdownValue === "Sales and Marketing") {
      router.push("/SalesMarketingU");
    } else if (dropdownValue === "Education and Administration") {
      router.push("/EducationAdministrationU");
    }
  };

  return (
    <Layout Urbanarea>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center  tracking-wide ..  pb-8 ...">
          Question 3
        </h1>
        {/* <p className="text-lime-200">
          Rules: * questions are mandantory and the rest are optional
        </p> */}

        <h1 class="text-cyan-200 font-serif text-2xl text-center  tracking-wide ..  ">
          Which skill are you interested in?
        </h1>
        <Dropdown options={UrbanareaOptions} onChange={handleDropdownChange} />
        <button
          className="text-lime-200 text-3xl ... inset-x-0 bottom-10 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
          onClick={handleSubmit}
        >
          NEXT
        </button>

        {/* <p>Selected option: {dropdownValue}</p> */}

        {/* <TextBox type="text" value0={textBoxValue} onChange={handleTextBoxChange} /> */}

        {/* <div>
          <a href={"/third"}>
            <button className="text-lime-200 absolute inset-x-0 bottom--30 h-16 ... text-3xl ..." >
              Submit
            </button>
          </a>{" "}
        </div> */}
      </section>
      
    </Layout>
  );
}
