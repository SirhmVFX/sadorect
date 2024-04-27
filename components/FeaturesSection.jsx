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
            Our service are tailored to meet unique needs and challenges of each
            brand, and are designed to provide the right brand identity
            necessary to help brands reach their full potential
          </p>
        </div>

        <div className="py-10 md:flex-row flex-col  flex gap-4 md:gap-8 justify-center">
          <div
            onClick={() => setFeatures("info1")}
            className="p-2 md:p-4 text-[12px] md:text-base transition-transform duration-300 transform cursor-pointer hover:scale-110 bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Brand Strategy and Positioning</p>
          </div>

          <div
            onClick={() => setFeatures("info2")}
            className="md:p-4 p-2 text-[12px] md:text-base transition-transform duration-300 transform cursor-pointer hover:scale-110 bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Digital Presence and Web Development</p>
          </div>
          <div
            onClick={() => setFeatures("info3")}
            className="md:p-4 p-2 text-[12px] md:text-base transition-transform duration-300 transform cursor-pointer hover:scale-110  bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Brand Identity Development</p>
          </div>
        </div>
        {feature === "info2" ? (
          <div className="md:flex gap-4 items-center">
            <div className="bg-white p-6 md:w-1/2 flex items-start flex-col gap-4 md:gap-8 rounded-3xl">
              <h1 className="font-bold text-xl md:text-2xl">
                Digital Presence and Web Development
              </h1>
              <p className="md:text-base text-[11px]">
                Sadorect can optimize your digital presence by designing and
                developing a user-friendly website that reflects your brand
                identity. They can also assist with search engine optimization
                (SEO), content strategy, and user experience (UX) design to
                enhance online visibility and engagement.
              </p>

              <div className="flex gap-3 flex-col">
                <h1 className="font-bold  md:text-lg">Benefits</h1>

                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px] text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Differentiation and Competitive Advantage:
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px]  text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Consistent Brand Experience:
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className=" md:text-base text-[11px]  text-primarycolor" />
                  <p className="text-[11px] md:text-base">
                    Targeted Marketing and Communication:
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
                Brand Identity Development
              </h1>
              <p className="md:text-base text-[11px]">
                We can create or refresh your brand identity, including
                designing a compelling logo, selecting brand colors and fonts,
                and developing brand guidelines. A strong brand identity helps
                create a cohesive and memorable brand image across all
                touchpoints.{" "}
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
                Brand Strategy and Positioning
              </h1>
              <p className="md:text-base text-[11px]">
                Sadorect can work with you to develop a clear brand strategy,
                defining your brand&apos;s unique positioning, target audience,
                value proposition, and messaging. They help identify what sets
                your business apart from competitors and how to effectively
                communicate this to your audience.
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
