"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline.";

const features = [
  "Choose your favorite colors",
  "Select your perfect size",
  "Feel the luxurious textures",
  "Discover your ideal fit",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-3/4 justify-end">
          <motion.div
            className="h-2/3 w-2/3 rounded-full"
            variants={scrollAnimation}
          >
            <Image
              src="/assets/PaolaStories.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={10}
              width={10}
              className="drop-shadow-xxl rounded-full  "
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-bold leading-relaxed text-black-600">
              Visit our shop
            </h3>
            <p className="my-2 text-black-500">
              Explore our curated collection of fitness wear
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <ButtonOutline>Shop now</ButtonOutline>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
