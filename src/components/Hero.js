"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Happy customers",
      number: "300",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Online sessions completed",
      number: "2000",
      icon: "/assets/Icon/onlineServices.svg",
    },
    {
      name: "Customized nutrition plans",
      number: "500",
      icon: "/assets/Icon/staricon.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-16 px-8 xl:px-16 mx-auto">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-4 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-center md:items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-black-600 leading-normal">
              Discover your best self with{" "}
              <strong className="font-bold text-sky-500 ">
                Pao<span className="">Fit</span>
              </strong>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Welcome to My Fitness World! Explore clothing, discover recipes,
              and engage in customized exercises.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className="flex w-full justify-center  self-center">
            <motion.div
              className="w-2/4 h-1/3 md:w-2/5 md:h-2/4"
              variants={scrollAnimation}
            >
              <Image
                src={"/assets/PaolaHero.png"}
                alt="ImageHero"
                id="imageHero"
                quality={100}
                width={480}
                height={480}
                layout="responsive"
                className="rounded-full shadow-orange-lg "
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {
                      /* listUsers.number */ listUsers.number != ""
                        ? listUsers.number + "+"
                        : ""
                    }
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
