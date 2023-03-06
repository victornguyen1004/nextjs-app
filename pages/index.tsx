import Head from "next/head";
import Navbar from "@/components/Navbar";

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
        <script
          src="https://kit.fontawesome.com/f6f851698f.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {/* Start of Homepage */}
      <div className="font-mono">
        <div
          className="relative h-[560px] whitespace-nowrap"
          style={{
            backgroundImage: "url(/banner.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <div className="flex items-center justify-center flex-col h-[calc(100%-200px)]">
            <h1 className="font-bold text-4xl  text-primary">
              Tra cứu tuyến xe buýt tại Đà Lạt
            </h1>
            <h2 className="text-primary mt-2 font-semibold">
              Xem thông tin chi tiết, thời gian, tuyến đường, trạm dừng.
            </h2>
            <div className="flex justify-between w-full min-w-[600px] mt-4 rounded-[48px] max-w-[800px] bg-primary relative shadow-lg">
              <i className="absolute top-3.5 left-4 text-2xl text-textcolor fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                className="outline-0 text-altprimary font-semibold text-lg w-full px-16 py-4 placeholder:text-lg  placeholder:font-semibold bg-transparent"
                placeholder="Nhập tên tuyến cần tìm..."
              />
              <button className="px-12 m-1 whitespace-nowrap bg-accent text-primary font-bold rounded-[48px]">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
        <div className="bg-primary h-screen relative z-5 rounded-[48px] -mt-12 px-global py-12 text-secondary">
          <div className="w-[120px] absolute -top-12 right-12">
            <img src="/scrolldown.png" alt="scrolldown.png" />
          </div>
          <div className="text-center text-accent font-black text-2xl">
            Danh sách các tuyến xe buýt
          </div>
        </div>
      </div>
    </>
  );
}
