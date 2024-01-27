// // pages/Question1.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

import { useRouter } from "next/router";
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function SalesMarketingU() {
  // const [textBoxValue, setTextBoxValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // State for dropdown value
  const router = useRouter();

  // const handleTextBoxChange = (e) => {
  //   setTextBoxValue(e.target.value);
  // };

  const handleDropdownChange = (selectedOption) => {
    setDropdownValue(selectedOption);
  };

  const SalesMarketingUOptions = [
    {
      label: "Operational and Manual Labor Roles",
      value: "Operational and Manual Labor Roles",
    },
    {
      label: "Administrative and Office Roles",
      value: "Administrative and Office Roles",
    },
  ];

  const handleSubmit = () => {
    if (dropdownValue === "Operational and Manual Labor Roles") {
      router.push("/OperationalManualLaborRolesU");
    } else if (dropdownValue === "Administrative and Office Roles") {
      router.push("/AdministrativeOfficeRolesU");
    }
  };

  return (
    <Layout SalesMarketingU>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center  tracking-wide ..">
          Question 4
        </h1>
        {/* <p className="text-lime-200">
          Rules: * questions are mandantory and the rest are optional
        </p> */}

        <h1 class="text-cyan-200 font-serif text-2xl text-center  tracking-wide .. ">
          Which from these do you prefer?
        </h1>
        <Dropdown options={SalesMarketingUOptions} onChange={handleDropdownChange}
        />
        <button
          className="text-lime-200 text-3xl ... inset-x-0 font-serif bottom-10 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
          onClick={handleSubmit}
        >
          NEXT
        </button>

        {/* <p>Selected option: {dropdownValue}</p> */}

        {/* <TextBox type="text" value0={textBoxValue} onChange={handleTextBoxChange} /> */}

        {/* <div>
          <a href={"/third"}>
            <button className="text-lime-200 absolute inset-x-0 bottom--30 h-16 ... text-4xl ..." >
              Submit
            </button>
          </a>{" "}
        </div> */}
      </section>
      
    </Layout>
  );
}
