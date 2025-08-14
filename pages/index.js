import Head from "next/head";
import Image from "next/image";
import { siteTitle } from "../components/Layout"; // Removed the named import for Layout
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900 relative">
      {/* Adding the GIF image without transparency */}
      <div className="absolute left-0 w-full h-full">
        <Image
  src="/images/bgpic2.gif"
  alt="Animated background of colorful visuals"
  fill
  unoptimized
  style={{ objectFit: "cover" }}
/>

        </div>
      {/* Text content */}
      <div className="text-center text-white relative z-10">
        <a href={"/aboutpage"}>
          <button className="text-white-800 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
            ABOUT
          </button>
        </a>
        <a href={"/Englishlearner"}>
        <button className="text-white fixed  top-14 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
            LEARN ENGLISH
          </button>
        </a>
        
        <div  className="fixed top-28 left-6 z-50 " >
          <LanguageSwitcher/>
        </div>



        <div>
          <p className="text-6xl font-serif font-bold tracking-wide">UNBOUND</p>
          <p className="text-base font-serif font-bold text-lime-200">
            GO BEYOND DEGREES!
          </p>

          <a href={"/questionnaire"}>
            <button className="text-teal-400 text-3xl font-MONO h-16 mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
              QUESTIONNAIRE
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}


