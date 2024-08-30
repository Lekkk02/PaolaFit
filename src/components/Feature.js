"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline";

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
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 lg:mt-4 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 my-12 items-center">
        <ScrollAnimationWrapper className="flex justify-center sm:justify-end">
          <motion.div
            className="w-full lg:w-3/4 relative"
            variants={scrollAnimation}
          >
            <Image
              src="/assets/PaolaTienda.png"
              alt="Fitness Apparel"
              layout="responsive"
              quality={100}
              height={400}
              width={400}
              className="drop-shadow-xxl shadow-xl rounded-full"
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-center lg:items-start justify-center w-full"
            variants={scrollAnimation}
          >
            <h3 className="text-4xl lg:text-4xl font-light leading-relaxed text-gray-800">
              Explore my shop
            </h3>
            <p className="my-4 text-gray-600 text-lg">
              Unleash your potential with our premium fitness apparel.
            </p>
            <ul className="text-gray-600 text-lg list-disc pl-5 mb-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="flex justify-center lg:justify-start space-x-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <ButtonOutline className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                Shop Now
              </ButtonOutline>
              <ButtonOutline className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                Learn More
              </ButtonOutline>
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
