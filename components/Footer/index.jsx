import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white bg-darkersecondary pt-16 pb-4 px-small md:px-global flex flex-col">
      <div className="flex justify-between">
        {/* Logo */}
        <Link href="/" className="font-black text-2xl">
          DALATBUS
        </Link>
        {/* Links */}
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-6 flex flex-col">
            <Link href="/" className="hover:text-accent duration-300 p-2">
              Trang chủ
            </Link>
            <Link href="/about" className="hover:text-accent duration-300 p-2">
              Về chúng tôi
            </Link>
            <Link href="/contact" className="hover:text-accent duration-300 p-2">
              Liên hệ
            </Link>
          </div>
          <div className="col-span-6 flex flex-col">
            <Link href="/contact" className="hover:text-accent duration-300 p-2">
              Khiếu nại
            </Link>
            <Link href="/contact" className="hover:text-accent duration-300 p-2">
              Hỗ trợ
            </Link>
            <Link href="/contact" className="hover:text-accent duration-300 p-2">
              Quảng cáo
            </Link>
          </div>
        </div>
        {/* Social Media */}
        <div className="">
          <div className="text-xl w-full flex justify-between">
            <Link
              href="https://facebook.com/nqv.ilb"
              className="p-2"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link
              href="https://www.messenger.com/t/100028303874254/"
              className="p-2"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-messenger"></i>
            </Link>
            <Link
              href="https://github.com/victornguyen1004"
              className="p-2"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              href="https://www.instagram.com/victornguyen1004/"
              className="p-2"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <hr className="h-2 my-2" />
          <Link href="tel:+84528695414" className="p-2 block">
            <i className="fa-solid fa-phone"></i>
            <span className="ml-2">(+84) 528695414</span>
          </Link>

          <Link href="mailto: quanggvuu1004@gmail.com" className="p-2 block">
            <i className="fa-regular fa-envelope"></i>
            <span className="ml-2">quanggvuu1004@gmail.com</span>
          </Link>
        </div>
      </div>
      <div className="mt-16 flex text-sm justify-between">
        <div className="">
          <Link href="/" className="underline underline-offset-4 " target="_blank">
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="ml-8 underline underline-offset-4"
            target="_blank"
          >
            Terms and Conditions
          </Link>
        </div>
        <div className="">© Victor Web Developing</div>
      </div>
    </footer>
  );
}
