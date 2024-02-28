"use client";
import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "María Flores",
      image: "/assets/people-3.png",
      city: "Marietta",
      country: "USA",
      rating: "5",
      testimoni:
        "Muchisimas gracias por tus consejos y tu profesionalismo ante toda la ayuda que te pedí, eres lo que estaba buscando una entrenadora que entendiera mis gustos al respecto de mi alimentación y gracias a ti me pude adaptar rápido a mi nueva dieta. Gracias por todo de verdad te recomiendo al 100% con los ojos cerrados",
    },
    {
      name: "Juan Ramón",
      image: "/assets/people-3.png",
      city: "Seattle",
      country: "USA",
      rating: "5",
      testimoni:
        "Desde que empecé tus entrenamientos y tu dieta me siento mucho mejor, puedo dormir mejor, no tengo hambre, gracias por todo tu esfuerzo y conocimiento y tantos consejos siempre cada día tienes algo que aporta para mi alimentación y los ejercicios los explicas tan bien, Dios te bendiga por siempre, gracias porque ahora veo los resultados en tan poco tiempo",
    },
    {
      name: "Patricia Miller",
      image: "/assets/people-3.png",
      city: "Vancouver",
      country: "USA",
      rating: "5",
      testimoni:
        "Gracias por tus consejos, con tu asesoría ya he rebajado 8 libras y voy a ir por más. Te recomiendo al 100%",
    },
    {
      name: "Ana Hernández",
      image: "/assets/people-3.png",
      city: "Cancún",
      country: "México",
      rating: "5",
      testimoni:
        "Las fajas de Paola son excelentes! Una de las mejores fajas de compresión que he probado, de alta calidad y el fit es espectacular, reduce el abdomen de inmediato sin incomodidad! Te da una figura hourglass y muy bonita. El uso diario y constante me han ayudado a perder peso, reduciendo centímetros mi abdomen. Recomendada al 100% sin duda alguna! Gracias Paola!",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="slick-dots">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch mb-32"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city}, {listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Image className="h-4 w-4" src={Stars} />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-2">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <Image src={ArrowBack} className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <Image src={ArrowNext} className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
