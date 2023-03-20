export default function Route(props) {
    return (
      <a
        key={props.id}
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

        <div className="bg-white border-t-4 border-secondary p-4  flex flex-col justify-between">
          <h5 className="text-lg font-semibold mb-1">{props.name}</h5>
          <div className="line-clamp-2 text-ellipsis">{props.desc}</div>
          {/* <button className="bg-accent mt-2 group-hover:opacity-90 border shadow flex items-center justify-center text-white font-semibold p-2 rounded-xl">
                      Xem chi tiết
                      <i class="fa-solid duration-100 ease-in-out fa-up-right-from-square text-white pl-2"></i>
                    </button> */}
        </div>
      </a>
    );
}