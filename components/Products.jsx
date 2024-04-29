import { FaUserAstronaut } from "react-icons/fa";

import { FaHouseLaptop } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
function Products() {
  return (
    <>
      <section className="w-full md:2-4/6 mx-auto p-4 md:p-8" id="products">
        <h1 className="text-xl md:text-4xl ">Our Products and Services</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 md:py-8">
          <div className="bg-white p-4 md:p-8 flex flex-col items-center rounded-md shadow-gray-50 shadow-md">
            <FaUserAstronaut className="text-md md:text-2xl text-primarycolor" />
            <h1 className="font-bold text-lg md:text-3xl">I.T. Consulting</h1>
            <p className="text-gray-500 md:text-base text-[11px]">
              We provide advice and guidance to businesses on how to use
              information technology in order to meet their business objectives.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 flex flex-col items-center rounded-md shadow-gray-50 shadow-md">
            <FaChartPie className="text-md md:text-2xl text-primarycolor" />
            <h1 className="font-bold text-lg text-center leading-tight md:text-3xl">
              Software Support
            </h1>
            <p className="text-gray-500 md:text-base text-[11px]">
              You are welcome to explore our technical support to assist with
              issues you might be facing with your softwares
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 flex flex-col items-center rounded-md shadow-gray-50 shadow-md">
            <MdOutlineSecurity className="text-md md:text-2xl text-primarycolor" />
            <h1 className="font-bold text-lg md:text-3xl">Cyber Security</h1>
            <p className="text-gray-500 md:text-base text-[11px]">
              In a world of increasing persistent threats totechnological
              infrastructures, you are rest-assured that your digital assets are
              well protected and losses prevented in the most extreme cases of
              security breaches.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 flex flex-col items-center rounded-md shadow-gray-50 shadow-md">
            <FaNetworkWired className="text-md md:text-2xl text-primarycolor" />
            <h1 className="font-bold text-lg text-center leading-tight md:text-3xl">
              Network Setup Services
            </h1>
            <p className="text-gray-500 md:text-base text-[11px]">
              We are available to help with your network setup and eliminate
              connectivity problems within your local and among your remote work
              environments.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 flex flex-col items-center rounded-md shadow-gray-50 shadow-md">
            <MdOutlineDeveloperMode className="text-md md:text-2xl text-primarycolor" />
            <h1 className="font-bold text-lg text-center leading-tight md:text-3xl">
              App Development
            </h1>
            <p className="text-gray-500 md:text-base text-[11px]">
              You can count on us to create the apps you need to meet specific
              busness requirements and multiply your productivity.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 flex flex-col items-center rounded-md shadow-gray-50 shadow-md">
            <FaHouseLaptop className="text-md md:text-2xl text-primarycolor" />
            <h1 className="font-bold text-lg md:text-3xl">Web Hosting</h1>
            <p className="text-gray-500 md:text-base text-[11px]">
              We help you manage your online presence to ensure you are visible
              and always available when your clients need you online.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
