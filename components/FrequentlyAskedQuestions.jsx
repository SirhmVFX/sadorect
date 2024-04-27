import { FaArrowDown } from "react-icons/fa";
import FAQ from "./Faq";
import { faqdata } from "@/app/data";

function FrequentlyAskedQuestions() {
  return (
    <>
      <section className="flex flex-col gap-4 md:gap-8 items-center md:px-10 p-6 md:py-20">
        <h1 className="text-xl md:text-5xl">
          Frequently Asked{" "}
          <span className="font-bold text-primarycolor">Questions</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {faqdata.map((data) => (
            <FAQ key={data.id} question={data.question} answer={data.answer} />
          ))}
        </div>
      </section>
    </>
  );
}

export default FrequentlyAskedQuestions;
