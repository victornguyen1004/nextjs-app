import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta
          name="description"
          content="Trang chủ để tìm kiếm và tra cứu thông tin các chuyến xe buýt"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html className="font-mavenpro">
        <div className="flex justify-between items-center px-global py-4 font-semibold">
          <Link
            href="/"
            className="text-accent font-mavenpro font-black text-lg"
          >
            DALATBUS
          </Link>
          <nav className="text-primary font-mavenpro">
            <Link href="/contact" className="mx-2 px-4 py-2  duration-200">
              Trang chủ
            </Link>
            <Link href="/contact" className="mx-2 px-4 py-2  duration-200">
              Thông tin
            </Link>
            <Link href="/contact" className="mx-2 px-4 py-2  duration-200">
              Liên hệ
            </Link>
          </nav>
          <div className="">
            <Link href="/" className="mx-2 py-3 px-5 text-primary ">
              Đăng nhập
            </Link>
            <Link
              href="/"
              className="mx-2 py-3 px-6 rounded-lg bg-accent border-2 border-accent hover:bg-white duration-200 hover:text-accent text-white"
            >
              Đăng ký
            </Link>
          </div>
        </div>
        <div className="mx-4 px-24 py-16 flex flex-row justify-between bg-background rounded-2xl">
          <div className="w-full"></div>
          <div className="w-full"></div>
        </div>
      </html>
    </>
  );
}
