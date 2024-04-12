import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";

function GetStartedSection() {
  return (
    <>
      <section className="bg-white rounded-3xl p-10 flex flex-col gap-8">
        <div className="flex gap-8 items-center">
          <div className="w-2/4">
            <h1 className="text-3xl">
              Do i qualify for{" "}
              <span className="font-bold text-primarycolor">
                sadorect services ?
              </span>
            </h1>
          </div>

          <div className="flex w-2/4 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
              <FaCheckCircle className="text-2xl text-primarycolor" />
              <h1>If you want a strategic brand development</h1>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
              <FaCheckCircle className="text-2xl text-primarycolor" />
              <h1>If you want a professional design and and visual identity</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
            <FaCheckCircle className="text-2xl text-primarycolor" />
            <h1>if you want Enhanced Market Presence and Differentiation</h1>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
            <FaCheckCircle className="text-2xl text-primarycolor" />
            <h1>if you need Focused Brand Messaging and Storytelling</h1>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
            <FaCheckCircle className="text-2xl text-primarycolor" />
            <h1>if you want Expertise and Industry Insights</h1>
          </div>
          <Button title={"Get Started"} />
        </div>
      </section>
    </>
  );
}

export default GetStartedSection;
