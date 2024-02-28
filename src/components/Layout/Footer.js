"use client";
import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Image from "next/image";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            className="inline-block"
            width={54}
            height={54}
            src="/assets/LogoEstefanySimpl.png"
          />

          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/assets/Icon/facebook.svg"
                width={34}
                height={34}
                className="h-8 w-8"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/assets/Icon/twitter.svg"
                height={34}
                width={34}
                className="h-8 w-8"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/assets/Icon/instagram.svg"
                height={34}
                width={34}
                className="h-8 w-8"
              />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - PaoFit</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
