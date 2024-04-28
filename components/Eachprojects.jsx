import Image from "next/image";

function EachProject() {
  return (
    <>
      <div className="bg-white w-full rounded-md md:rounded-3xl">
        <div className="w-full">
          <Image
            src={"/proj1.png"}
            width={1000}
            height={1000}
            alt="wb"
            className="w-full h-full object-cover rounded-md md:rounded-3xl"
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
    </>
  );
}

export default EachProject;
