function ServiceSection() {
  return (
    <>
      <section className="bg-white rounded-3xl p-14 flex gap-6 ">
        <div className="w-3/5 flex flex-col gap-8">
          <h1 className="text-4xl">
            Empower your brand with our Cutting-Edge{" "}
            <span className="font-bold text-primarycolor">services</span>
          </h1>

          <div className="bg-gray-100 border rounded-2xl border-gray-200">
            <div className="p-10">
              <h1 className="text-xl font-bold">Brand Advice and Support</h1>
              <p className="text-gray-500">
                Our dedicated team is always available to help you every step of
                the way, with expert guidance and tailored advice
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-8 border border-gray-200 w-3/5 rounded-2xl">
              <h1 className="text-xl font-bold">
                Wide rande of your brands needs
              </h1>
              <p className="text-gray-500">
                We offer variety of brands services, including short term
                working service and long term scheduled services
              </p>
            </div>

            <div className="p-8 bg-black rounded-2xl w-2/5 border border-gray-200">
              <h1 className="text-xl text-white font-bold">
                Affordable and{" "}
                <span className="text-primarycolor">reliable</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="p-8 rounded-2xl border border-gray-200">
            <div></div>
            <div>
              <h1 className="text-xl font-bold">Quick execution process</h1>
              <p>
                <p className="text-gray-500">
                  Get your brands services efficiently and properly executed in
                  a very short period of time
                </p>
              </p>
            </div>
          </div>

          <div className="p-8 border-gray-200 border rounded-2xl">
            <div>
              <h1 className="text-xl font-bold">Affordable payment options</h1>
              <p className="text-gray-500">
                Choose a comfortable payment method from our flexible payment
                plans
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceSection;
