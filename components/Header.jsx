import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <>
      <header className="">
        <h1>sadorect</h1>

        <div>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Products</Link>
          <Link href={"#"}>Tools</Link>
          <Link href={"#"}>Projects</Link>
        </div>

        <Button title={"Send a Message"} />
      </header>
    </>
  );
}

export default Header;
