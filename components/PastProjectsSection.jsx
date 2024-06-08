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
            href={"/projects"}
          >
            View all past projects
            <FaArrowRight />
          </Link>
        </div>

        <div className="flex md:flex-row flex-col gap-4 md:gap-8">
          <div className="bg-white md:w-3/5 rounded-3xl">
            <div className="w-full">
              <Image
                src={"/funk.png"}
                width={1000}
                height={1000}
                alt="wb"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="p-4 flex flex-col gap-4 md:p-8">
              <h1 className="font-bold text-md md:text-2xl">
                Future Nautiq Knots
              </h1>
              <p className="text-[11px] md:text-xs">
                FUNKS Ltd is an expert in boat shows and yacht brokerage, ranges
                from small to large overcraft (boats/vessels).
              </p>
              <Link
                href={"https://fnautiqknots.com/ "}
                className="text-primarycolor font-bold text-sm"
              >
                Visit Website
              </Link>
            </div>
          </div>

          <div className="md:w-2/5 w-full flex flex-col md:flex-col gap-4 md:gap-8">
            <div className="bg-white rounded-3xl">
              <div className="w-full h-[200px]">
                <Image
                  src={"/dao.png"}
                  width={1000}
                  height={1000}
                  alt="wb"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="p-4 flex flex-col gap-4 md:p-8">
                <h1 className="font-bold text-md md:text-2xl">
                  Divine Daao Cars{" "}
                </h1>
                <p className="text-[11px] md:text-xs">
                  Divine Daao Nigeria Limited. RC 1310246 is a car rental
                  provider positioned to serve the commercial and leisure
                  segments of the travel industry and focused on value-conscious
                  clients and customers.{" "}
                </p>
                <Link
                  href={"https://divinedaao.ng "}
                  className="text-primarycolor font-bold text-sm"
                >
                  Visit Website
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl">
              <div className="w-full h-[200px]">
                <Image
                  src={"/bright.png"}
                  width={1000}
                  height={1000}
                  alt="wb"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="p-4 flex flex-col gap-4 md:p-8">
                <h1 className="font-bold text-md md:text-2xl">
                  Brightbell Janitorial Serivces{" "}
                </h1>
                <p className="text-[11px] md:text-xs">
                  Home and CommercialCleaning Done Right Away Get reliable &
                  affordable cleaning services for your facility with a 100%
                  satisfaction guaranteed!{" "}
                </p>
                <Link
                  href={"https://brightbelljanitors.com/"}
                  className="text-primarycolor font-bold text-sm"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PastProjectsSection;
