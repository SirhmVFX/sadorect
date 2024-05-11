import { FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";
function HeroSection() {
  return (
    <>
      <section className="bg-black text-white px-8 pb-8 md:pt-28 pt-20 rounded-es-3xl">
        <div className="md:w-5/6 mx-auto">
          <h1 className="text-3xl md:text-7xl">
            Unlock your{" "}
            <span className="text-primarycolor font-bold">Brand</span> Potential
            with sadorect services
          </h1>

          <div className="md:flex items-center gap-10">
            <div className="md:w-1/3 md:p-4 flex items-start gap-8 flex-col">
              <p className="md:text-base text-[11px]">
                Achieve business success with sadorect services. Our
                comprehensive solutions help unlock brand potentials and take
                your vision to the next level
              </p>
              <Button title={"Enquire"} />
            </div>
            <div className="md:w-1/3 h-full">
              <Image
                src={"/3d2.gif"}
                width={1000}
                height={1000}
                alt="gif"
                className="w-full h-full"
              />
            </div>
            <div className="md:w-1/3 md:p-4 flex flex-col gap-4 md:gap-10">
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-primarycolor" />
                <p>Fast and efficient</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-primarycolor" />
                <p>Flexible and reliable </p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-primarycolor" />
                <p>Quality and Affordable services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
