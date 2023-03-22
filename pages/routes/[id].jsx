import HeaderContainer from "@/components/Container/HeaderContainer";
import Navbar from "@/components/Navbar";

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/routes/');
    const data = await res.json();

const paths = data.map(route => {
    return {
        params: { id: route.id.toString() }
    }
})

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/api/routes/' + id);
    const data = await res.json();

    return {
        props: { route : data},
    }
}

export default function Details({ route }) {
  return (
    <div className="">
      <HeaderContainer>
        <Navbar />
        <div className="mx-global p-12 rounded-3xl h-[calc(100vh-120px)] bg-primary">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-8 bg-blue-500">{route.name}</div>
            <div className="col-span-4 bg-red-500">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="h-full">fdsfadf</div>
                <div className="h-full">fdsfadf</div>
              </div>
            </div>
          </div>
        </div>
      </HeaderContainer>
    </div>
  );
}
