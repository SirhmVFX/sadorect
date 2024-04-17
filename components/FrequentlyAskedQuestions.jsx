import { FaArrowDown } from "react-icons/fa";
import FAQ from "./Faq";
import { faqdata } from "@/app/data";

function FrequentlyAskedQuestions() {
  return (
    <>
      <section className="flex flex-col gap-8 items-center px-10 py-20">
        <h1 className="text-5xl">
          Frequently Asked{" "}
          <span className="font-bold text-primarycolor">Questions</span>
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {faqdata.map((data) => (
            <FAQ key={data.id} question={data.question} answer={data.answer} />
          ))}
        </div>
      </section>
    </>
  );
}

export default FrequentlyAskedQuestions;
