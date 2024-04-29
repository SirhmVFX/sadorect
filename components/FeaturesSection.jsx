"use client";

import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

function FeaturesSection() {
  const [feature, setFeatures] = useState("info1");

  return (
    <>
      <section className="p-4 md:p-10">
        <div className="flex items-center flex-col  md:gap-4">
          <h1 className="text-2xl md:text-5xl">
            Affordable and quality services with{" "}
            <span className="font-bold text-primarycolor">sadorect</span>
          </h1>
          <p className="text-gray-500 text-lg text-[11px] leading-tight md:text-base  md:text-center">
            As a business owner or manager, you are no doubt always looking for
            ways to improve efficiency, reduce costs, and stay ahead of the
            competition. One way to achieve these goals is by leveraging the
            expertise of an IT consulting firm.
          </p>
        </div>

        <div className="md:py-10 py-4  flex gap-4 md:gap-8 justify-center">
          <div
            onClick={() => setFeatures("info1")}
            className="p-2 md:p-4 text-[12px] md:text-base transition-transform duration-300 transform cursor-pointer hover:scale-110 bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Software Support</p>
          </div>

          <div
            onClick={() => setFeatures("info2")}
            className="md:p-4 p-2 text-[12px] md:text-base transition-transform duration-300 transform cursor-pointer hover:scale-110 bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>I.T. Consulting</p>
          </div>
          <div
            onClick={() => setFeatures("info3")}
            className="md:p-4 p-2 text-[12px] md:text-base transition-transform duration-300 transform cursor-pointer hover:scale-110  bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Web Hosting and Management</p>
          </div>
        </div>
        {feature === "info2" ? (
          <div className="md:flex gap-4 items-center">
            <div className="bg-white p-6 md:w-1/2 flex items-start flex-col gap-4 md:gap-8 rounded-3xl">
              <h1 className="font-bold text-xl md:text-2xl">I.T. Consulting</h1>
              <p className="md:text-base text-[11px]">
                We provide advice and guidance to businesses on how to use
                information technology in order to meet their business
                objectives
              </p>

              <div className="flex gap-3 flex-col">
                <h1 className="font-bold  md:text-lg">Benefits</h1>

                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px] text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Differentiation and Competitive Advantage
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px]  text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Consistent Brand Experience
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px]  text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Targeted Marketing and Communication
                  </p>
                </div>
              </div>

              <Button title={"Send a Message"} />
            </div>
            <div className="md:block hidden w-1/2 h-[450px]">
              <Image
                src={"/img33.jpeg"}
                alt="img"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ) : feature === "info3" ? (
          <div className="flex gap-4 items-center">
            <div className="bg-white p-6 md:w-1/2 flex items-start flex-col gap-4 md:gap-8 rounded-3xl">
              <h1 className="font-bold text-xl md:text-2xl">
                Web Hosting and Management
              </h1>
              <p className="md:text-base text-[11px]">
                We help you manage your online presence to ensure you are
                visible and always available when your clients need you online.
              </p>

              <div className="flex gap-3 flex-col">
                <h1 className="font-bold text-lg">Benefits</h1>

                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px] text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Differentiation and Competitive Advantage:
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px] text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Differentiation and Competitive Advantage:
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px] text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Differentiation and Competitive Advantage:
                  </p>
                </div>
              </div>

              <Button title={"Send a Message"} />
            </div>
            <div className="md:block hidden w-1/2 h-[450px]">
              <Image
                src={"/img1.webp"}
                alt="img"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <div className="bg-white p-6 md:w-1/2 flex items-start flex-col gap-4 md:gap-8 rounded-3xl">
              <h1 className="font-bold text-xl md:text-2xl">
                Software and Support
              </h1>
              <p className="md:text-base text-[11px]">
                You are welcome to explore our technical support to assist with
                issues you might be facing with your softwares{" "}
              </p>

              <div className="flex gap-3 flex-col">
                <h1 className="font-bold text-lg">Benefits</h1>

                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Differentiation and Competitive Advantage
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Consistent Brand Experience
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Targeted Marketing and Communication
                  </p>
                </div>
              </div>

              <Button title={"Send a Message"} />
            </div>
            <div className="md:block hidden w-1/2 h-[450px]">
              <Image
                src={"/img11.jpeg"}
                alt="img"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default FeaturesSection;
