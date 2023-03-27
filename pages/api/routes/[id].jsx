import { routes } from "./data";

export default function handler(req, res) {
  const { id }= req.query;
  const routeId = { id };
  const resultId = routeId.id;
  res.status(200).json(routes.at(resultId));
}


// route: [
//       "Bến xe buýt đường Mai Anh Đào, P8, Đà Lạt",
//       "Đường Phù Đổng Thiên Vương",
//       "Đường Nguyễn Thái Học",
//       "Đường Lê Đại Hành",
//       "Khu Hòa Bình",
//       "Đường 3/2",
//       "Đường Trần Phú",
//       "Đường 3/4",
//       "Quốc lộ 20",
//       "Bến xe Đức Trọng",
//     ],