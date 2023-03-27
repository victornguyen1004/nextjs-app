import HeaderContainer from "@/components/Container/HeaderContainer";
import Navbar from "@/components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/routes/");
  const data = await res.json();

  const paths = data.map((route) => {
    return {
      params: { id: route.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/api/routes/" + id);
  const data = await res.json();

  return {
    props: { route: data },
  };
};

export default function Details({ route }) {
  return (
    <div className="">
      <HeaderContainer>
        <Navbar />
        <div className="p-12 rounded-3xl text-secondary bg-primary">
          <div className="grid grid-cols-12 h-full gap-14 gap-y-4">
            <div className="col-span-4">
              <p className="text-xl font-semibold white">
                Tuyến
              </p>
              <h2 className="text-3xl font-bold white">
                {route.name}
              </h2>
              <div className="relative mt-8 z-10">
                <div className="w-full h-full absolute rounded-3xl top-0 -z-[1] left-0 translate-x-3 translate-y-3 bg-accent"></div>
                <img
                  src={`/${route.imgUrl}`}
                  alt=""
                  className="rounded-3xl border-4 border-secondary "
                />
              </div>
            </div>
            {
              // desc
              // unit
              // phone
              // route
            }
            <div className="col-span-5">
              <div className="flex flex-col justify-center items-center h-full text-lg">
                <div className="grid-cols-12 gap-y-4 grid">
                  <div className="col-span-6">
                    <h4 className="font-bold">Mã số tuyến</h4>
                    <p className="text-xl mt-1">{route.number}</p>
                  </div>
                  <div className="col-span-6">
                    <h4 className="font-bold">Độ dài tuyến</h4>
                    <p className="text-xl mt-1">{route.length}</p>
                  </div>
                  <div className="col-span-6">
                    <h4 className="font-bold">Thời gian</h4>
                    <p className="text-xl mt-1">{route.time}</p>
                  </div>
                  <div className="col-span-6">
                    <h4 className="font-bold">Giãn cách tuyến</h4>
                    <p className="text-xl mt-1">{route.spacing}</p>
                  </div>
                  <div className="col-span-12">
                    <h4 className="font-bold">Điện thoại</h4>
                    <p className="text-xl mt-1">{route.phone}</p>
                  </div>
                  <div className="col-span-12">
                    <h4 className="font-bold">Đơn vị vận chuyển</h4>
                    <p className="text-xl mt-1">{route.unit}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              Placeholder for Goole Map API
            </div>
          <div className="col-span-9">
            <h4 className="font-bold mt-12 text-xl">Lộ trình tuyến</h4>
            <p className="whitespace-normal">{route.route}</p>
          </div>
          </div>
        </div>
      </HeaderContainer>
    </div>
  );
}
