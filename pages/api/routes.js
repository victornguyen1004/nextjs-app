const routes = [
  { id: 0, name: "Đà Lạt – Đức Trọng" },
  { id: 1, name: "Đà Lạt – Đơn Dương" },
  { id: 2, name: "Đà Lạt – Lạc Dương" },
  { id: 3, name: "Đà Lạt – Bảo Lộc" },
  { id: 4, name: "Đà Lạt – Xuân Trường" },
  { id: 5, name: "Đà Lạt – Phú Sơn" },
  { id: 6, name: "Liên nghĩa – Tân Thanh" },
  { id: 7, name: "Đà Lạt – Sân bay Liên Khương" },
  { id: 8, name: "Đà Lạt – Đại Lào" },
  { id: 9, name: "Đà Lạt – Thái Phiên" },
];

export default function handler(req, res) {
  res.status(200).json(routes);
}
