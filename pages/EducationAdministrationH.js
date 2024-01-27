// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import React, { useState } from 'react';
import Box from '../components/Box';



export default function EducationAdministrationH() {
  const [textBoxValue, setTextBoxValue] = useState("");
  

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };


  return (
    <Layout EducationAdministrationH>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-cyan-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          RECCOMENDATIONS
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
        <Box>
        <p>Corporate Jobs</p>
      </Box>
      <Box>
        <p>Working in NGOs</p>
      </Box>
      <Box>
        <p>Teacher</p>
      </Box>
      <Box>
        <p>Community Outreach Coordinator</p>
      </Box>
      </section>
      
    </Layout>

  );
}
// }