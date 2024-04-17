import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-black text-white ">
        <h1 className="font-bold">sadorect</h1>

        <div className="flex gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"#"}>Products</Link>
          <Link href={"#"}>Tools</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/aboutus"}>About</Link>
          <Link href={"/contactus"}>Contact</Link>
        </div>

        <Button title={"Send a Message"} />
      </header>
    </>
  );
}

export default Header;
