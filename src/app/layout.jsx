import "./globals.css";

export const metadata = {
  title: "Haha",
  description: "Trang chủ của DALATBUS",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scrollbar-thumb-gray-400 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent"
    >
      <body>
        {children}
      </body>
    </html>
  );
}
