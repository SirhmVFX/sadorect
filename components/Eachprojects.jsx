import Image from "next/image";
import Link from "next/link";
function EachProject({ name, desc, image, url }) {
  return (
    <>
      <div className="bg-white w-full rounded-md md:rounded-3xl">
        <div className="w-full">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="wb"
            className="w-full h-full object-cover rounded-md md:rounded-3xl"
          />
        </div>

        <div className="p-4 flex flex-col gap-2 md:p-6">
          <h1 className="font-bold text-md md:text-xl">{name}</h1>
          <p className="text-[11px] md:text-xs">{desc}</p>

          <Link
            className="text-primarycolor font-bold cursor-pointer text-xs"
            href={url}
          >
            Check it out {url}
          </Link>
        </div>
      </div>
    </>
  );
}

export default EachProject;
