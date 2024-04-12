import { FaArrowDown } from "react-icons/fa";

function FrequentlyAskedQuestions() {
  return (
    <>
      <section className="flex flex-col gap-8 items-center px-10 py-20">
        <h1 className="text-5xl">
          Frequently Asked{" "}
          <span className="font-bold text-primarycolor">Questions</span>
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-lg hover:bg-white cursor-pointer border border-gray-200">
            <div className="flex justify-between py-4">
              <h1 className="font-bold text-2xl">
                Are these Services available for small businesses?
              </h1>
              <FaArrowDown className="text-lg text-primarycolor" />
            </div>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              pariatur non explicabo ea fugiat? Architecto in dicta praesentium
              eum cum.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:bg-white cursor-pointer border border-gray-200">
            <div className="flex justify-between py-4">
              <h1 className="font-bold text-2xl">
                Are these Services affordable for small businesses?
              </h1>
              <FaArrowDown className="text-lg text-primarycolor" />
            </div>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              pariatur non explicabo ea fugiat? Architecto in dicta praesentium
              eum cum.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:bg-white cursor-pointer border border-gray-200">
            <div className="flex justify-between py-4">
              <h1 className="font-bold text-2xl">
                What Services would i be getting from sadorect?
              </h1>
              <FaArrowDown className="text-lg text-primarycolor" />
            </div>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              pariatur non explicabo ea fugiat? Architecto in dicta praesentium
              eum cum.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:bg-white cursor-pointer border border-gray-200">
            <div className="flex justify-between py-4">
              <h1 className="font-bold text-2xl">
                Are fast can this services be delivered?
              </h1>
              <FaArrowDown className="text-lg text-primarycolor" />
            </div>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              pariatur non explicabo ea fugiat? Architecto in dicta praesentium
              eum cum.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:bg-white cursor-pointer border border-gray-200">
            <div className="flex justify-between py-4">
              <h1 className="font-bold text-2xl">How do i get started?</h1>
              <FaArrowDown className="text-lg text-primarycolor" />
            </div>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              pariatur non explicabo ea fugiat? Architecto in dicta praesentium
              eum cum.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:bg-white cursor-pointer border border-gray-200">
            <div className="flex justify-between py-4">
              <h1 className="font-bold text-2xl">
                Are the payment plan flexible?
              </h1>
              <FaArrowDown className="text-lg text-primarycolor" />
            </div>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              pariatur non explicabo ea fugiat? Architecto in dicta praesentium
              eum cum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FrequentlyAskedQuestions;
