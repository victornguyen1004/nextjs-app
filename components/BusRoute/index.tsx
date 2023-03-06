import Link from "next/link";

export default function BusRoute() {
    return (
        <Link href={"/"} className="">
            <h3 className="text-accent font-semibold text-lg">Tuyến Nguyễn Văn Cừ</h3>
            <div className="ellipsis-"></div>
        </Link>
    );
}