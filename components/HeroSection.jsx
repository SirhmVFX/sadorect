import { FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";
function HeroSection() {
  return (
    <>
      <section className="bg-black text-white p-8 rounded-es-3xl">
        <div className="w-5/6 mx-auto">
          <h1 className="text-7xl">
            Unlock your{" "}
            <span className="text-primarycolor font-bold">Brand</span> Potential
            with sadorect services
          </h1>

          <div className="flex items-center gap-10">
            <div className="w-1/3 p-4 flex items-start gap-8 flex-col">
              <p>
                Achieve business success with sadorect services. Our
                comprehensive solutions help unlock brand potentials and take
                your vision to the next level
              </p>
              <Button title={"Enquire"} />
            </div>
            <div className="w-1/3 h-full">
              <Image
                src={"/3d.gif"}
                width={1000}
                height={1000}
                alt="gif"
                className="w-full h-full"
              />
            </div>
            <div className="w-1/3 p-4 flex flex-col gap-10">
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
                <p>Affordable and quality services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;