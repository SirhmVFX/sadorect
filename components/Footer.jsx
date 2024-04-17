import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="w-full p-8 mx-auto mt-20 md:w-5/6">
        <div className="grid grid-cols-3 gap-36">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="font-bold text-4xl text-primarycolor">sadorect</h1>
            <p>
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
            <Link className="text-gray-500" href={"/termsofservices"}>
              Terms of Service
            </Link>
            <Link className="text-gray-500" href={"#"}>
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Quick Links</h1>

            <Link className="text-gray-500" href={"#"}>
              Products
            </Link>
            <Link className="text-gray-500" href={"#"}>
              Tools
            </Link>
            <Link className="text-gray-500" href={"#"}>
              Projects
            </Link>
            <Link className="text-gray-500" href={"#"}>
              About us
            </Link>
            <Link className="text-gray-500" href={"#"}>
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
