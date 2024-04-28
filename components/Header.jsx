"use client";

import Link from "next/link";
import Button from "./Button";

import { MdOutlineCancel, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [showModal, setShowmodal] = useState(true);
  return (
    <>
      <div>
        <header className="flex justify-between items-center p-4 bg-black text-white ">
          <h1 className="font-bold">sadorect</h1>

          <div className="hidden md:flex gap-8">
            <Link href={"/"}>Home</Link>
            <Link href={"#"}>Products</Link>
            <Link href={"#"}>Tools</Link>
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
          <div className="flex flex-col p-10 gap-10 backdrop-filter backdrop-blur-sm absolute text-white left-0 right-0 bottom-0 top-10 bg-[#000000ae]">
            <Link href={"/"}>Home</Link>
            <Link href={"#"}>Products</Link>
            <Link href={"#"}>Tools</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/aboutus"}>About</Link>
            <Link href={"/contactus"}>Contact</Link>
            <Button title={"Send a Message"} />
          </div>
        ) : (
          ""
        )}
      </div>{" "}
    </>
  );
}

export default Header;
