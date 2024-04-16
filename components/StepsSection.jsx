function StepsSection() {
  return (
    <>
      <section className="flex flex-col gap-8 px-10 py-20 items-center">
        <h1 className="text-5xl">
          Three <span className="font-bold text-primarycolor">Steps </span>you
          need to branding your business{" "}
        </h1>

        <div className="flex w-full gap-8">
          <div className="w-2/4"></div>
          <div className="w-2/4 flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4">
              <div className="w-[40px] h-[40px] bg-primarycolor rounded-lg flex justify-center items-center p-6">
                <p className="text-white font-bold text-3xl">1</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Step 1: Submit your brand details
                </h1>
                <p className=" text-gray-500">
                  Provide us with some basic informations about your brand to
                  get us started
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-[40px] h-[40px] bg-primarycolor rounded-lg flex justify-center items-center p-6">
                <p className="text-white font-bold text-3xl">2</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Step 2: Review, Approve and Agreement{" "}
                </h1>
                <p className=" text-gray-500">
                  Our Team would review your brand details aand start execution
                  with all necessary information you've provided upon a payment
                  agreement and execution time frame
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-[40px] h-[40px] bg-primarycolor rounded-lg flex justify-center items-center p-6">
                <p className="text-white font-bold text-3xl">3</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Step 3: Inspect and Finalize{" "}
                </h1>
                <p className=" text-gray-500">
                  After project completion you inspect and make corrections and
                  we finalize the project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StepsSection;
