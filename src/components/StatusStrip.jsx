import { useEffect, useState } from "react";
import { BUSINESS } from "../data";

export default function StatusStrip() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  // useEffect runs side effects (like timers) outside of rendering.
  // The empty [] means "run once, when this component first mounts".
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 30000);
    return () => clearInterval(id); // cleanup when component unmounts
  }, []);

  return (
    <div className="status-strip">
      <span className="status-dot">● OPEN NOW</span>
      <span>{time}</span>
      <span>in Kurunegala · we answer at any hour</span>
      <a href={`tel:${BUSINESS.displayPhone.replace(/\s/g, "")}`} className="status-phone">
        {BUSINESS.displayPhone}
      </a>
    </div>
  );
}
