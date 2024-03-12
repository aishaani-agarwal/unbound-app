// // pages/Question1.js

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Layout, { siteTitle } from "../components/Layout"


export default function Question1() {
  // const [textBoxValue, setTextBoxValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // State for dropdown value
  const router = useRouter();

  // const handleTextBoxChange = (e) => {
  //   setTextBoxValue(e.target.value);
  // };

  const handleDropdownChange = (selectedOption) => {
    setDropdownValue(selectedOption);
  };

  const Question1Options = [
    { label: "Yes", value: "Disabled" },
    { label: "No", value: "Not Disabled" },
    // { label: "Neck mobility", value: "Neck mobility" },
    // { label: "Hip flexibility", value: "Hip flexibility" },
  ];

  const handleSubmit = () => {
    if (dropdownValue === "Disabled") {
      router.push("/Disabled");
    } else if (dropdownValue === "Not Disabled") {
      router.push("/NDisabled");
    }
    // }  else if (dropdownValue === "Neck mobility") {
    //   router.push("/page-for-option-Neck mobility");
    // } else if (dropdownValue === "Hip flexibility") {
    //   router.push("/page-for-option-Hip flexibility");
    // }
  };

  return (
    <Layout Question1>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl ... font-serif  text-center  tracking-wide .. pb-8 ...">
          Question 1
        </h1>
        {/* <p className="text-yellow-200">
          Rules: * questions are mandantory and the rest are optional
        </p> */}

        <h1 class="text-cyan-200 font-serif text-2xl text-center  tracking-wide ..   ">
          Do you have any mobility challenges?
        </h1>
        <Dropdown options={Question1Options} onChange={handleDropdownChange} />
        <button
          className="text-lime-200 text-3xl ... inset-x-0 bottom-10 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
          onClick={handleSubmit}
        >
          NEXT
        </button>

     </section>
    </Layout>
  );
}

//  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...
