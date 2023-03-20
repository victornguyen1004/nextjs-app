import Head from 'next/head'
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/routes");
  const data = await res.json();

  return {
    props: {
      routes: data
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
      <Container>
        <Navbar />
        <div className="flex items-center justify-center flex-col h-[calc(100%-200px)]">
          <h1 className="font-bold text-3xl text-primary">
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
      </Container>
      {/* Content Section */}
      <div className="bg-primary relative z-5 rounded-[48px] -mt-12 px-global py-12 text-secondary">
        <h4 className="text-2xl font-bold">Danh sách các tuyến xe</h4>
        <div className="grid grid-cols-12 gap-8 mt-8">
          {routes.map(route => {
            return (
              <a
                key={route.id}
                className="col-span-3 group relative shadow-md border rounded-xl overflow-hidden"
                href="/"
              >
                {/* For modal layout */}
                <div className="absolute flex justify-center items-center w-full h-full bg-[rgba(24,24,27,0.0)] group-hover:bg-[rgba(24,24,27,0.8)] duration-200 group-hover: z-[50] top-0 left-0 ">
                  <button className="text-white opacity-0 group-hover:opacity-100 duration-200 px-4 py-2 border-2 rounded-lg font-semibold border-white">
                    Xem chi tiết
                  </button>
                </div>
                <div className="overflow-hidden relative">
                  <img
                    src="/bus.jpg"
                    alt=""
                    className="group-hover:scale-110 duration-200 "
                  />
                </div>
                <div className="bg-white p-4  flex flex-col justify-between">
                  <h5 className="text-lg font-semibold min-h-[56px]">
                    {route.name}
                  </h5>
                  <div className="">
                    
                  </div>
                  {/* <button className="bg-accent group-hover:opacity-90 border shadow flex items-center justify-center text-white font-semibold p-2 rounded-xl">
                    Xem chi tiết
                    <i class="fa-solid duration-100 ease-in-out fa-up-right-from-square text-white pl-2"></i>
                  </button> */}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;

