// // pages/Question1.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function Handmovements() {
  const [dropdownValue, setDropdownValue] = useState(""); // State for dropdown value
  const router = useRouter();

  // const handleTextBoxChange = (e) => {
  //   setTextBoxValue(e.target.value);
  // };

  const handleDropdownChange = (selectedOption) => {
    setDropdownValue(selectedOption);
  };

  const handmovementsOptions = [
    { label: "Technical", value: "Technical" },
    { label: "Service", value: "Service" },
    { label: "Problem Solving", value: "Problem Solving" },
    { label: "Sales and Marketing", value: "Sales and Marketing" },
    { label: "Education and Administration", value: "Education and Administration",},
  ];

  const handleSubmit = () => {
    if (dropdownValue === "Technical") {
      router.push("/TechnicalH");
    } else if (dropdownValue === "Service") {
      router.push("/ServiceH");
    } else if (dropdownValue === "Problem Solving") {
      router.push("/ProblemSolvingH");
    } else if (dropdownValue === "Sales and Marketing") {
      router.push("/SalesMarketingH");
    } else if (dropdownValue === "Education and Administration") {
      router.push("/EducationAdministrationH");
    }
  };

  return (
    <Layout handmovements>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl ... font-serif ...absolute bottom-3 right-5 w-auto ... ">
          Question 3
        </h1>
        {/* <p className="text-lime-200">
          Rules: * questions are mandantory and the rest are optional
        </p> */}

        <h1 class="text-cyan-200 font-serif text-2xl absolute left-60  transform -translate-x-1/4 relative h-20 absolute inset-20 ... ">
          Which skill do you have best?
        </h1>
        <Dropdown options={handmovementsOptions} onChange={handleDropdownChange} />
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