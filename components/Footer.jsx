import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="w-full p-8 mx-auto mt-20 md:w-5/6">
        <div className="grid md:grid-cols-3 gap-10 md:gap-36">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="font-bold text-4xl text-primarycolor">sadorect</h1>
            <p className="text-[11px] md:text-base text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas
              nostrum sunt accusantium amet soluta asperiores rerum saepe
              numquam, blanditiis vitae similique culpa fugit incidunt possimus
              eligendi qui praesentium ullam!
            </p>

            <Link className="p-2 border rounded-lg" href={"#"}>
              support@sadorect.com
            </Link>
            <Link className="p-2 border rounded-lg" href={"#"}>
              +234 123 4567 8900
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Company</h1>

            <Link className="text-gray-500" href={"/contactus"}>
              Contact us
            </Link>
            <Link className="text-gray-500" href={"/aboutus"}>
              About us
            </Link>
            <Link className="text-gray-500" href={"/privacypolicy"}>
              Privacy Policy
            </Link>
            <Link className="text-gray-500" href={"/termsofservice"}>
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Quick Links</h1>

            <Link className="text-gray-500" href={"/#products"}>
              Products
            </Link>
            <Link className="text-gray-500" href={"/#tools"}>
              Tools
            </Link>
            <Link className="text-gray-500" href={"/projects"}>
              Projects
            </Link>
            <Link className="text-gray-500" href={"/aboutus"}>
              About us
            </Link>
            <Link className="text-gray-500" href={"/contactus"}>
              Contact us
            </Link>
          </div>
        </div>
        <div></div>
      </footer>
    </>
  );
}

export default Footer;
