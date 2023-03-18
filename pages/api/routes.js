const routes = [
  { id: 0, route: "Tuyến Đà Lạt – Đức Trọng" },
  { id: 1, route: "Tuyến Đà Lạt – Đơn Dương" },
  { id: 2, route: "Tuyến Đà Lạt – Lạc Dương" },
  { id: 3, route: "Tuyến Đà Lạt – Bảo Lộc" },
  { id: 4, route: "Tuyến Đà Lạt – Xuân Trường" },
  { id: 5, route: "Tuyến Đà Lạt – Phú Sơn" },
  { id: 6, route: "Tuyến Liên nghĩa – Tân Thanh" },
  { id: 7, route: "Tuyến Đà Lạt – Sân bay Liên Khương" },
  { id: 8, route: "Tuyến Đà Lạt – Đại Lào" },
  { id: 9, route: "Tuyến Đà Lạt – Thái Phiên" },
];

export default function handler(req, res) {
  res.status(200).json(routes);
}
