import Link from "next/link";

function ContactUs() {
  return (
    <>
      <section className="md:w-5/6 mx-auto p-10">
        <div className="w-4/6 flex gap-8 items-center mx-auto p-10 rounded-xl bg-white shadow-gray-200 shadow-lg">
          <div className="w-3/5 flex flex-col gap-4">
            <h1 className="text-gray-500">Contact</h1>
            <h1 className="font-bold text-primarycolor text-5xl">
              You have a project? or want to say hello...
            </h1>
            <Link className="font-bold text-gray-300 text-4xl" href={"#"}>
              info@sadorect.com
            </Link>
          </div>

          <div className="w-2/5 flex flex-col gap-6">
            <div>
              <h1 className="fond-bold">Address</h1>
              <p className="text-sm text-gray-500">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </p>
            </div>
            <div>
              <h1 className="fond-bold">Contact</h1>
              <p className="text-sm text-gray-500">+44 7876 617836</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
