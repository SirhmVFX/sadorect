import Image from "next/image";

function Testimonial() {
  return (
    <>
      <div className="m-4 bg-white p-6 rounded-3xl flex flex-col gap-4">
        <h1 className="font-bold text-lg">Transformative Experinece</h1>
        <p className="text-gray-500 text-sm">
          Working with sadorect was a transformative experience for my brand.
          The tailored solutions and friendly support exceeded my expectations.
          I highly recommend them
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
              <p className="text-[12px] text-gray-500">Director, Sadorect</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
