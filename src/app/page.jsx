import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Script from "next/script";

export const metadata = {
  title: "Trang chủ - DalatBus",
  description: "Trang chủ của DALATBUS",
};




export default function HomePage({routes}) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/f6f851698f.js"
        async
      ></Script>
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
      <div className="bg-primary h-screen relative z-5 rounded-[48px] -mt-12 px-global py-12 text-secondary">
        <div className="grid grid-cols-12 ">          
          {routes?.map((route) => {
            return <div key={route.id} className="col-span-6">{route.route}</div>
          })}
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/routes');
  const routes = await res.json();
  
  return {
    props: { 
      routes, 
    },
  }
}




