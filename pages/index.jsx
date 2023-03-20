import Head from "next/head";
import HeaderContainer from "@/components/Container/HeaderContainer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";

// https://www.youtube.com/watch?v=btHsYY8I6Z0

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/routes");
  const data = await res.json();

  return {
    props: {
      routes: data,
    },
  };
};

const Home = ({ routes }) => {
  return (
    <>
      <Head>
        <title>Trang chủ - DalatBus</title>
        <meta name="description" content="Trang chủ của DalatBus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Start of Homepage */}
      <HeaderContainer>
        <Navbar />
        <div className="absolute top-0 left-0 flex items-center justify-center flex-col w-full h-full">
          <h1 className="font-bold md:text-3xl text-xl text-primary">
            CỔNG THÔNG TIN XE BUÝT ĐÀ LẠT
          </h1>
          <h2 className="text-primary mt-2 font-semibold">
            Xem thông tin chi tiết, thời gian, tuyến đường, trạm dừng.
          </h2>
          <div className="flex justify-between w-full min-w-[400px] mt-4 rounded-[48px] max-w-[600px] bg-primary relative shadow-lg ">
            <i className="absolute top-3.5 left-4 text-2xl text-textcolor fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="outline-0 text-textcolor font-semibold w-full px-16 text-lg py-4 placeholder:text-lg placeholder:font-semibold bg-transparent"
              placeholder="Nhập tên tuyến cần tìm..."
            />
            <button className="px-12 m-1 whitespace-nowrap bg-accent text-primary font-bold rounded-[48px]">
              Tìm kiếm
            </button>
          </div>
        </div>
      </HeaderContainer>
      {/* Content Section */}
        <div className="bg-primary relative z-5 rounded-[48px] lg:px-global px-small -mt-12 py-12 text-secondary">
          <h4 className="text-2xl font-bold">Danh sách các tuyến xe</h4>
          <div className="grid grid-cols-12 gap-8 mt-8">
            {routes.map((route) => {
              return (
                <Route id={route.id} name={route.name} desc={route.desc} />
              );
            })}
          </div>
        </div>
    </>
  );
};

export default Home;
