"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import Testimonial from "./Testimonial";
function TestimonialSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="px-10 py-28 flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="w-4/5">
            <h1 className="font-bold">Empowering Brands</h1>
            <h1 className=" text-5xl">
              Our Positive{" "}
              <span className="font-bold text-primarycolor">Impact</span>
            </h1>
            <p className="text-lg text-gray-500">
              Our brand solutions are designed to help businesses achieve their
              goals and drive economic growth in their local area
            </p>
          </div>
          <div className="w-1/4">
            <div className="flex items-center gap-1 ">
              <FaStar className="text-primarycolor" />
              <p className="font-bold text-2xl">sadorect</p>
            </div>

            <div className="flex gap-2">
              <FaStar className="bg-primarycolor p-2 text-3xl rounded-sm text-white" />
              <FaStar className="bg-primarycolor p-2 text-3xl rounded-sm text-white" />
              <FaStar className="bg-primarycolor p-2 text-3xl rounded-sm text-white" />
              <FaStar className="bg-primarycolor p-2 text-3xl rounded-sm text-white" />
              <FaStar className="bg-primarycolor p-2 text-3xl rounded-sm text-white" />
            </div>

            <div className="flex gap-1 text-gray-500 text-sm">
              <p>sadorect 5.0</p>
              <p>| 103 Reviews</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <div className="">
            <Slider {...settings}>
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialSection;
