import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function PastProjectsSection() {
  return (
    <>
      <section className="px-8 py-20">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-5xl">
            Past <span className="font-bold text-primarycolor">Projects,</span>{" "}
            Real Stories
          </h1>
          <Link
            className="p-4 flex gap-2 items-center bg-white border border-primarycolor rounded-lg"
            href={"#"}
          >
            View all past projects
            <FaArrowRight />
          </Link>
        </div>

        <div className="flex gap-8 items-center">
          <div className="bg-white w-3/5 rounded-3xl">
            <div className="w-full">
              <Image
                src={"/proj1.png"}
                width={1000}
                height={1000}
                alt="wb"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="p-8">
              <h1 className="font-bold text-2xl">ProjectSaveNg</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                porro?.....
              </p>
            </div>
          </div>

          <div className="w-2/5 flex flex-col gap-8">
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

              <div className="p-8">
                <h1 className="font-bold text-2xl">ProjectSaveNg</h1>
                <p>
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

              <div className="p-8">
                <h1 className="font-bold text-2xl">ProjectSaveNg</h1>
                <p>
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
