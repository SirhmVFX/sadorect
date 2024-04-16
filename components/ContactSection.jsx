import Link from "next/link";
import Button from "./Button";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  return (
    <>
      <section className="p-20 bg-black rounded-3xl">
        <div className="w-3/5 flex flex-col items-start gap-4">
          <h1 className="text-6xl text-white">
            Ready to take your business to the next level?{" "}
          </h1>
          <p className="text-gray-500 text-lg">
            Apply for our brand solutions today
          </p>
          <Button title={"Send a message"} />
        </div>
        <div></div>

        <div className="py-8 flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <Link className="text-primarycolor" href={"#"}>
              support@sadorect.com
            </Link>
            <Link className="text-primarycolor" href={"#"}>
              info@sadorect.com
            </Link>
          </div>
          <div className="flex gap-10">
            <Link href={"#"}>
              <FaWhatsapp className="text-5xl text-primarycolor" />
            </Link>
            <Link href={"#"}>
              <FaTwitter className="text-5xl text-primarycolor" />
            </Link>
            <Link href={"#"}>
              <FaLinkedin className="text-5xl text-primarycolor" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
