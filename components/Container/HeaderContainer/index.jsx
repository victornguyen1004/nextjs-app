export default function HeaderContainer({ children }) {
  return (
    <div
      className="relative h-[110vh] whitespace-nowrap"
      style={{
        backgroundImage: "url(/banner.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
