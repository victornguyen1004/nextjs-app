import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinks } from "./Navlinks";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const activeNavbarItemStyles =
    "text-primary underline-offset-8 underline decoration-2 mx-2 px-4 py-2 duration-200";
  const nonActiveNavbarItemStyles = "text-primary mx-2 px-4 py-2 duration-200";
  return (
    <div className="flex justify-between bg-transparent items-center px-global py-6 font-semibold text-lg">
      <Link href="/" className="text-primary font-black text-2xl">
        DALATBUS
      </Link>
      <nav className="text-primary">
        {NavLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={
                currentRoute === link.path
                  ? activeNavbarItemStyles
                  : nonActiveNavbarItemStyles
              }
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {/*  User Action */}
      <div className="">
        <Link
          href="/"
          className="mx-2 py-3 px-5 text-primary duration-200 hover:text-accent"
        >
          Đăng nhập
        </Link>
        <Link
          href="/"
          className="mx-2 py-2 px-8 rounded-[48px] bg-accent border-2 border-accent hover:bg-transparent duration-200 hover:text-primary hover:border-primary text-primary"
        >
          Đăng ký
        </Link>
      </div>
    </div>
  );
}
