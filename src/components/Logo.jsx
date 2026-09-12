export default function Logo({ size = "md", animated = true }) {
  return (
    <div className={`brand-logo-wrap brand-logo-${size} ${animated ? "" : "no-shine"}`}>
      <img
        src="/images/logo.png"
        alt="RentWheels — Rent a Car"
        className="brand-logo"
      />
    </div>
  );
}