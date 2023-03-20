import Link from "next/link";

function UserAction() {
  return (
    <div className="">
      <Link href="/" className="mx-2 py-3 px-5 duration-200 hover:text-accent">
        Đăng nhập
      </Link>
      <Link
        href="/"
        className="mx-2 py-2 px-8 rounded-[48px] border-2 border-accent bg-accent duration-200 text-primary hover:bg-transparent hover:"
      >
        Đăng ký
      </Link>
    </div>
  );
}

export default UserAction;
