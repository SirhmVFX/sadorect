"use client";

import Link from "next/link";
import Button from "./Button";

import { MdOutlineCancel, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Header() {
  const [showModal, setShowmodal] = useState(false);
  const router = useRouter();
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth", // Smooth scrolling behavior
      });
    }
  };
  return (
    <>
      <div>
        <header className="flex fixed z-50 w-full justify-between items-center p-4 bg-black bg-opacity-35 backdrop-filter backdrop-blur-md text-white ">
          <div className=" h-6 md:h-8">
            <Image
              src={"/sadorect.svg"}
              width={1000}
              height={1000}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="hidden md:flex gap-8">
            <Link href={"/"}>Home</Link>
            <Link
              onClick={() => handleScrollToSection("products")}
              href={"/#products"}
            >
              Products
            </Link>
            <Link
              onClick={() => handleScrollToSection("tools")}
              href={"/#tools"}
            >
              Tools
            </Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/aboutus"}>About</Link>
            <Link href={"/contactus"}>Contact</Link>
          </div>

          <div className="md:hidden" onClick={() => setShowmodal(!showModal)}>
            {showModal ? (
              <MdOutlineCancel className="text-xl" />
            ) : (
              <MdOutlineMenu className="text-xl" />
            )}
          </div>

          <div className="hidden md:block">
            <Button title={"Send a Message"} />
          </div>
        </header>

        {showModal ? (
          <div className="z-20 flex flex-col p-10 gap-10 backdrop-filter backdrop-blur-sm  fixed text-white left-0 right-0 bottom-0 top-10 bg-[#000000ae]">
            <div
              onClick={() => {
                setShowmodal(!showModal);
                router.push("/");
              }}
            >
              Home
            </div>
            <div
              onClick={() => {
                setShowmodal(!showModal);
                router.push("/#products");
              }}
            >
              Products
            </div>
            <div
              onClick={() => {
                setShowmodal(!showModal);
                router.push("/#tools");
              }}
            >
              Tools
            </div>
            <div
              onClick={() => {
                setShowmodal(!showModal);
                router.push("/projects");
              }}
            >
              Projects
            </div>
            <div
              onClick={() => {
                setShowmodal(!showModal);
                router.push("/aboutus");
              }}
            >
              About
            </div>
            <div
              onClick={() => {
                setShowmodal(!showModal);
                router.push("/contactus");
              }}
            >
              Contact
            </div>

            <Button title={"Send a Message"} onclick={"/contactus"} />
          </div>
        ) : (
          ""
        )}
      </div>{" "}
    </>
  );
}

export default Header;
