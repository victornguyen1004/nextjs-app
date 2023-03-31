import Link from "next/link";

export default function Route(props) {
    return (
      <Link
        className="col-span-3 group relative shadow-md border rounded-xl overflow-hidden"
        href={'routes/' + props.id}
      >
        {/* For modal layout */}
        <div className="absolute flex justify-center items-center w-full h-full bg-[rgba(24,24,27,0.0)] group-hover:bg-[rgba(24,24,27,0.8)] duration-200 group-hover: z-[50] top-0 left-0 ">
          <button className="text-white opacity-0 group-hover:opacity-100 duration-200 px-4 py-2 border-2 rounded-lg font-semibold border-white">
            Xem chi tiết
          </button>
        </div>

        <div className="overflow-hidden relative">
          <img
            src={`${props.imgUrl}`}
            alt=""
            className="group-hover:scale-110 duration-200"
          />
        </div>

        <div className="bg-white border-t-4 border-secondary p-4 min-h-[144px] flex flex-col justify-between">
          <h5 className="text-lg font-bold mb-1">{props.name}</h5>
          <div className="line-clamp-2 text-ellipsis">{props.desc}</div>
        </div>
      </Link>
    );
}