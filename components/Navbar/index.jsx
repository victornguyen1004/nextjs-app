import UserAction from "./UserAction";
import { Navlinks } from "./Navlinks";
import Link from "next/link";

export default function Navbar() {
  // const activeNavbarItemStyles =
  //   "underline-offset-8 underline decoration-2 mx-2 px-4 py-2 duration-200";
  const navlinkStyles = "mx-2 hover:text-accent px-4 py-2 duration-200 xl:inline-block hidden";

  return (
    <div
      className={`flex justify-between bg-transparent text-primary items-center px-small lg:px-global py-6 font-semibold`}
    >
      <Link href="/" className="font-black text-2xl">
        DALATBUS
      </Link>
      <nav className="">
        {Navlinks.map((link, index) => {
          return (
            <Link key={index} href={link.path} className={navlinkStyles}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      {/*  User Action */}
      <UserAction />
    </div>
  );
}
