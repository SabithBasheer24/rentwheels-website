import Header from "./components/Header";
import Hero from "./components/Hero";
import StatusStrip from "./components/StatusStrip";
import Ticker from "./components/Ticker";
import Fleet from "./components/Fleet";
import Services from "./components/Services";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";

export default function App() {
  const [presetVehicle, setPresetVehicle] = useState(null);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <StatusStrip />
        <Ticker />
        <Fleet onSelectVehicle={setPresetVehicle}/>
        <Services />
        <Booking presetVehicle={presetVehicle} />
        <FAQ />
        <Contact />
      </main>

      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
