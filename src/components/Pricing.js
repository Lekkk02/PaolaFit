"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-gray-100 to-gray-200 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800"
            >
              Tailor Your Fitness Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-relaxed w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-4 text-gray-600"
            >
              Select a plan that suits your goals and start your fitness journey
              with us.
            </motion.p>
          </ScrollAnimationWrapper>

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-8 py-12">
            {[
              {
                title: "Plan 1",
                price: "$150 / mo",
                features: [
                  "2 days a week",
                  "Weight Check: Every 2 weeks",
                  "Personalized Nutritional Plan",
                ],
              },
              {
                title: "Plan 2",
                price: "$250 / mo",
                features: [
                  "3 days a week",
                  "Weight Check: Every 2 weeks",
                  "Personalized Nutritional Plan",
                  "24/7 Support",
                ],
              },
              {
                title: "Plan 3",
                price: "$300 / mo",
                features: [
                  "4 days a week",
                  "Weight Check: Every 2 weeks",
                  "Personalized Nutritional Plan",
                  "24/7 Support",
                ],
              },
            ].map((plan, index) => (
              <ScrollAnimationWrapper
                className="flex justify-center"
                key={index}
              >
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center bg-white shadow-xl rounded-3xl py-8 px-6 lg:px-12"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className="mb-6">
                    <Image
                      src={`/assets/Icon/dumbell.svg`}
                      width={100}
                      height={100}
                      alt={`${plan.title} Icon`}
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    {plan.title}
                  </h4>
                  <ul className="text-gray-600 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="my-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-2xl font-bold text-gray-800 mb-4">
                    {plan.price}
                  </p>
                  <ButtonPrimary>Select Plan</ButtonPrimary>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800"
            >
              Client Stories
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-relaxed mx-auto my-4 w-10/12 sm:w-7/12 lg:w-6/12 text-gray-600"
            >
              Hear what our clients have to say about their transformative
              experiences.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="relative w-full mt-16 ">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className=" bg-white-300 absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center bg-white shadow-lg">
                <div className="text-left w-full sm:w-3/4 lg:w-2/3">
                  <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                    Start your fitness journey with{" "}
                    <span className="text-blue-500">PaoFit</span>
                  </h5>
                  <p className="mt-2 text-gray-600">
                    Discover exclusive offers and deals just for you.
                  </p>
                </div>
                <ButtonPrimary className="mt-4 sm:mt-0">
                  Get Started
                </ButtonPrimary>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
