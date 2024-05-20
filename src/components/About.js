"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="pt-14 px-2 lg:px-24  bg-[rgb(251,253,255)]" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="flex flex-col sm:flex-row "
          variants={scrollAnimation}
        >
          <div
            id="backgroundContainer"
            className="border border-gray-100 flex flex-col max-w-full lg:max-w-[60%] items-center md:items-start h-2/3 lg:h-2/3 p-4 rounded-xl"
          >
            <h1 className="text-4xl lg:text-6xl self-center font-extrabold text-sky-700 leading-normal">
              BACKGROUND
            </h1>
            <p className="text-black-500 mt-4 mb-6 w-full lg:w-3/4 self-center">
              As a former medical student with five years of university
              education, I have developed a deep understanding of health and
              wellness principles, as well as valuable insights into the
              healthcare industry. While I did not complete my medical studies,
              my time in university provided me with a strong foundation in
              anatomy, physiology, and patient care.<br></br> In addition to my
              medical background, I have been passionate about fitness for many
              years, particularly since rediscovering my interest after my
              pregnancy. I have since become a certified fitness coach, allowing
              me to combine my medical knowledge with my love for physical
              activity and wellness.<br></br> My experience working with clients
              as a fitness coach has equipped me with valuable skills in goal
              setting, motivation, and personalized training programs. I
              understand the importance of building strong client relationships
              and delivering results that exceed expectations.
            </p>
          </div>
          <div className="flex justify-center items-end">
            <motion.div className="w-3/4 md:w-3/4 " variants={scrollAnimation}>
              <Image
                src={"/assets/BackgroundPaola.png"}
                alt="ImageHero"
                id=""
                quality={100}
                width={480}
                height={350}
                layout="responsive"
                className="drop-shadow-xxl  "
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
