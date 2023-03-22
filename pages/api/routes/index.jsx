const routes = [
  { id: 0, name: "Đà Lạt – Đức Trọng", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 1, name: "Đà Lạt – Đơn Dương", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 2, name: "Đà Lạt – Lạc Dương", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 3, name: "Đà Lạt – Bảo Lộc", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 4, name: "Đà Lạt – Xuân Trường", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 5, name: "Đà Lạt – Phú Sơn", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 6, name: "Liên nghĩa – Tân Thanh", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 7, name: "Đà Lạt – Liên Khương", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 8, name: "Đà Lạt – Đại Lào", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
  { id: 9, name: "Đà Lạt – Thái Phiên", desc: "Tuyến xe từ Đà Lạt tới bla bla với mã số chuyến xe là 12345 và số giãn cách"  },
];

export default function handler(req, res) {
  res.status(200).json(routes);
}
