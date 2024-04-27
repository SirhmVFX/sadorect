import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function PastProjectsSection() {
  return (
    <>
      <section className="px-4 md:px-8 py-20">
        <div className="flex md:flex-row flex-col justify-between py-4 md:items-center">
          <h1 className="md:text-5xl text-2xl">
            Past <span className="font-bold text-primarycolor">Projects,</span>{" "}
            Real Stories
          </h1>
          <Link
            className="p-2 md:p-4 flex gap-2 items-center bg-white border border-primarycolor rounded-lg"
            href={"#"}
          >
            View all past projects
            <FaArrowRight />
          </Link>
        </div>

        <div className="flex md:flex-row flex-col gap-4 md:gap-8 items-center">
          <div className="bg-white md:w-3/5 rounded-3xl">
            <div className="w-full">
              <Image
                src={"/proj1.png"}
                width={1000}
                height={1000}
                alt="wb"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="p-4 md:p-8">
              <h1 className="font-bold text-md md:text-2xl">ProjectSaveNg</h1>
              <p className="text-[11px] md:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                porro?.....
              </p>
            </div>
          </div>

          <div className="md:w-2/5 w-full flex md:flex-col gap-4 md:gap-8">
            <div className="bg-white rounded-3xl">
              <div className="w-full h-[200px]">
                <Image
                  src={"/proj2.jpeg"}
                  width={1000}
                  height={1000}
                  alt="wb"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="p-4 md:p-8">
                <h1 className="font-bold text-md md:text-2xl">ProjectSaveNg</h1>
                <p className="text-[11px] md:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  porro?.....
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl">
              <div className="w-full h-[200px]">
                <Image
                  src={"/proj3.avif"}
                  width={1000}
                  height={1000}
                  alt="wb"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="p-4 md:p-8">
                <h1 className="font-bold text-md md:text-2xl">ProjectSaveNg</h1>
                <p className="text-[11px] md:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  porro?.....
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PastProjectsSection;
