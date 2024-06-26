"use client";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

function FAQ({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`p-4 md:p-6 h-fit w-full rounded-lg hover:bg-white cursor-pointer border border-gray-200`}
      >
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-md md:text-2xl">{question} </h1>
          <FaArrowDown
            onClick={() => setShow(!show)}
            className="text-lg text-primarycolor"
          />
        </div>
        {show ? (
          <p className="text-gray-500 text-[11px] md:text-base">{answer}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FAQ;
