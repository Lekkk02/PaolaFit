"use client";
import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Image from "next/image";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white-500 pt-44 pb-32 md:pb-24 flex justify-evenly ">
        <div className="flex flex-col items-center">
          <Image
            className=""
            width={54}
            height={54}
            src="/assets/LogoEstefanySimpl.png"
          />
          <p className="text-gray-400 text-[13px] text-center">
            Paola Stefany - 2024
          </p>
        </div>
        <div className="flex w-auto mt-2 mb-4 -mx-2 justify-items-center">
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
      </div>
    </div>
  );
};

export default Footer;
