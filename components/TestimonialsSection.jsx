import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";
function TestimonialSection() {
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
          <div className="flex gap-4">
            <div className=" w-1/3 bg-white p-6 rounded-3xl flex flex-col gap-4">
              <h1 className="font-bold text-lg">Transformative Experinece</h1>
              <p className="text-gray-500 text-sm">
                Working with sadorect was a transformative experience for my
                brand. The tailored solutions and friendly support exceeded my
                expectations. I highly recommend them
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-[60px] h-[60px]">
                    <Image
                      src={"/mintosin.jpeg"}
                      width={1000}
                      height={1000}
                      alt="img"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold">Omojola Tosin</h1>
                    <p className="text-[12px] text-gray-500">
                      Director, Sadorect
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-1/3 bg-white p-6 rounded-3xl flex flex-col gap-4">
              <h1 className="font-bold text-lg">Transformative Experinece</h1>
              <p className="text-gray-500 text-sm">
                Working with sadorect was a transformative experience for my
                brand. The tailored solutions and friendly support exceeded my
                expectations. I highly recommend them
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-[60px] h-[60px]">
                    <Image
                      src={"/mintosin.jpeg"}
                      width={1000}
                      height={1000}
                      alt="img"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold">Omojola Tosin</h1>
                    <p className="text-[12px] text-gray-500">
                      Director, Sadorect
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-1/3 bg-white p-6 rounded-3xl flex flex-col gap-4">
              <h1 className="font-bold text-lg">Transformative Experinece</h1>
              <p className="text-gray-500 text-sm">
                Working with sadorect was a transformative experience for my
                brand. The tailored solutions and friendly support exceeded my
                expectations. I highly recommend them
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-[60px] h-[60px]">
                    <Image
                      src={"/mintosin.jpeg"}
                      width={1000}
                      height={1000}
                      alt="img"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold">Omojola Tosin</h1>
                    <p className="text-[12px] text-gray-500">
                      Director, Sadorect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <FaArrowLeft className="text-5xl hover:border hover:border-primarycolor bg-white p-4 rounded-md" />
            <FaArrowRight className="text-5xl hover:border hover:border-primarycolor bg-white p-4 rounded-md" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialSection;
