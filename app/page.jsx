import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
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

      <div className="w-4/6 mx-auto">
        <section className="p-10">
          <div className="flex items-center flex-col gap-4">
            <h1 className="text-5xl">
              Affordable and quality services with{" "}
              <span className="font-bold text-primarycolor">sadorect</span>
            </h1>
            <p className="text-gray-500 text-lg text-center">
              Our service are tailored to meet unique needs and challenges of
              each brand, and are designed to provide the right brand identity
              necessary to help brands reach their full potential
            </p>
          </div>

          <div className="py-10 flex gap-8 justify-center">
            <div className="p-4 bg-gray-50 rounded-lg border border-primarycolor ">
              <p>Brand Strategy and Positioning</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-primarycolor ">
              <p>Digital Presence and Web Development</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-primarycolor ">
              <p>Brand Identity Development</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
