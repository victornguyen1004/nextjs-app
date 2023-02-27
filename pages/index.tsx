import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
      <div className="font-mavenpro">
<<<<<<< HEAD
        <div className="flex justify-between items-center px-global py-6 font-semibold">
=======
        <div className="flex justify-between items-center px-global py-4 font-semibold">
>>>>>>> 861664c7618915a9c5c2a11cb717076035b6193d
          <Link
            href="/"
            className="text-accent font-mavenpro font-black text-lg"
          >
            DALATBUS
          </Link>
          <nav className="text-primary font-mavenpro">
            <Link
              href="/"
              className="mx-2 px-4 py-2 hover:text-[#5c7c9f] duration-200"
            >
              Trang chủ
            </Link>
            <Link
              href="/contact"
              className="mx-2 px-4 py-2 hover:text-[#5c7c9f] duration-200"
            >
              Thông tin
            </Link>
            <Link
              href="/contact"
              className="mx-2 px-4 py-2 hover:text-[#5c7c9f] duration-200"
            >
              Liên hệ
            </Link>
          </nav>
          <div className="">
            <Link
              href="/"
              className="mx-2 py-3 px-5 text-primary hover:text-[#5c7c9f] duration-200"
            >
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
        <div className="mx-4 px-24 py-8 flex flex-row justify-between bg-background rounded-2xl">
          <div className="w-full text-primary flex flex-col justify-center">
            <p className="text-3xl font-bold">Chào mừng đến</p>
            <h1 className="text-8xl font-[900] mt-2 font-sans">ĐÀ LẠT</h1>
            <p className="mt-6 font-semibold">
              Tra cứu thông tin các tuyến xe buýt <br /> tại Đà Lạt để lựa chọn
              lộ trình phù hợp nhất
            </p>
            <div className="mt-6 flex justify-between bg-white p-2 shadow-lg border rounded-[36px] z-10 -mr-32">
              <div className="">
                <input
                  type="text"
                  className="placeholder:text-primary py-2 px-4 bg-background rounded-3xl outline-0"
                  placeholder="Địa điểm"
                />
              </div>
              <input
                type="text"
                className="py-2 px-4 bg-background placeholder:text-primary rounded-3xl outline-0"
                placeholder="Điểm đến"
              />
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/banner.png"
              width="700"
              height="600"
              alt="banner.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
