import UserAction from "./UserAction";
import { Navlinks } from "./Navlinks";

export default function Navbar() {
  // const activeNavbarItemStyles =
  //   "underline-offset-8 underline decoration-2 mx-2 px-4 py-2 duration-200";
  const navlinkStyles = "mx-2 hover:text-accent px-4 py-2 duration-200";

  return (
    <div
      className={`flex justify-between bg-transparent text-primary items-center px-global py-6 font-semibold`}
    >
      <a href="/" className="font-black text-2xl">
        DALATBUS
      </a>
      <nav className="">
        {Navlinks.map((link, index) => {
          return (
            <a key={index} href={link.path} className={navlinkStyles}>
              {link.name}
            </a>
          );
        })}
      </nav>
      {/*  User Action */}
      <UserAction />
    </div>
  );
}
