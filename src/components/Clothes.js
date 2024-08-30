"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// Cargar Carousel dinámicamente
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const LandingPage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <div id="collection">
          <div className="max-w-screen-lg mx-auto py-12">
            <h2 className="text-4xl font-medium text-center mb-12 text-gray-800">
              Our Collection
            </h2>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              arrows={true}
              draggable={true}
              autoPlaySpeed={10000}
              transitionDuration={1000}
              showDots={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              containerClass="carousel-container"
            >
              <div className="p-5">
                <div className="relative overflow-hidden max-h-[520px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-1000">
                  <Image
                    src={"/assets/carousel/4.jpeg"}
                    alt="Collection Item 1"
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="relative overflow-hidden max-h-[520px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-1000">
                  <Image
                    src={"/assets/carousel/5.jpeg"}
                    alt="Collection Item 2"
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="relative overflow-hidden max-h-[520px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-1000">
                  <Image
                    src={"/assets/carousel/6.jpeg"}
                    alt="Collection Item 3"
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="relative overflow-hidden max-h-[520px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-1000">
                  <Image
                    src={"/assets/carousel/3.PNG"}
                    alt="Collection Item 4"
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="relative overflow-hidden max-h-[520px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-1000">
                  <Image
                    src={"/assets/carousel/2.PNG"}
                    alt="Collection Item 5"
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="relative overflow-hidden max-h-[520px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-1000">
                  <Image
                    src={"/assets/carousel/1.jpg"}
                    alt="Collection Item 6"
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default LandingPage;
