"use client";

import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

function FeaturesSection() {
  const [feature, setFeatures] = useState("info1");

  return (
    <>
      <section className="p-10">
        <div className="flex items-center flex-col gap-4">
          <h1 className="text-5xl">
            Affordable and quality services with{" "}
            <span className="font-bold text-primarycolor">sadorect</span>
          </h1>
          <p className="text-gray-500 text-lg text-center">
            Our service are tailored to meet unique needs and challenges of each
            brand, and are designed to provide the right brand identity
            necessary to help brands reach their full potential
          </p>
        </div>

        <div className="py-10 flex gap-8 justify-center">
          <div
            onClick={() => setFeatures("info1")}
            className="p-4 transition-transform duration-300 transform cursor-pointer hover:scale-110 bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Brand Strategy and Positioning</p>
          </div>

          <div
            onClick={() => setFeatures("info2")}
            className="p-4 transition-transform duration-300 transform cursor-pointer hover:scale-110 bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Digital Presence and Web Development</p>
          </div>
          <div
            onClick={() => setFeatures("info3")}
            className="p-4 transition-transform duration-300 transform cursor-pointer hover:scale-110  bg-gray-50 rounded-lg border border-primarycolor "
          >
            <p>Brand Identity Development</p>
          </div>
        </div>
        {feature === "info2" ? (
          <div className="flex gap-4 items-center">
            <div className="bg-white p-6 w-1/2 flex items-start flex-col gap-8 rounded-3xl">
              <h1 className="font-bold text-2xl">
                Digital Presence and Web Development
              </h1>
              <p>
                Sadorect can optimize your digital presence by designing and
                developing a user-friendly website that reflects your brand
                identity. They can also assist with search engine optimization
                (SEO), content strategy, and user experience (UX) design to
                enhance online visibility and engagement.
              </p>

              <div className="flex gap-3 flex-col">
                <h1 className="font-bold text-lg">Benefits</h1>

                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Differentiation and Competitive Advantage:</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Consistent Brand Experience:</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Targeted Marketing and Communication:</p>
                </div>
              </div>

              <Button title={"Send a Message"} />
            </div>
            <div className="w-1/2 h-[450px]">
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
            <div className="bg-white p-6 w-1/2 flex items-start flex-col gap-8 rounded-3xl">
              <h1 className="font-bold text-2xl">Brand Identity Development</h1>
              <p>
                We can create or refresh your brand identity, including
                designing a compelling logo, selecting brand colors and fonts,
                and developing brand guidelines. A strong brand identity helps
                create a cohesive and memorable brand image across all
                touchpoints.{" "}
              </p>

              <div className="flex gap-3 flex-col">
                <h1 className="font-bold text-lg">Benefits</h1>

                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Differentiation and Competitive Advantage:</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Differentiation and Competitive Advantage:</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Differentiation and Competitive Advantage:</p>
                </div>
              </div>

              <Button title={"Send a Message"} />
            </div>
            <div className="w-1/2 h-[450px]">
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
            <div className="bg-white p-6 w-1/2 flex items-start flex-col gap-8 rounded-3xl">
              <h1 className="font-bold text-2xl">
                Brand Strategy and Positioning
              </h1>
              <p>
                Sadorect can work with you to develop a clear brand strategy,
                defining your brand's unique positioning, target audience, value
                proposition, and messaging. They help identify what sets your
                business apart from competitors and how to effectively
                communicate this to your audience.
              </p>

              <div className="flex gap-3 flex-col">
                <h1 className="font-bold text-lg">Benefits</h1>

                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Differentiation and Competitive Advantage</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Consistent Brand Experience</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-primarycolor" />
                  <p>Targeted Marketing and Communication</p>
                </div>
              </div>

              <Button title={"Send a Message"} />
            </div>
            <div className="w-1/2 h-[450px]">
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
