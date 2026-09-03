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

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <StatusStrip />
        <Ticker />
        <Fleet />
        <Services />
        <Booking />
        <FAQ />
        <Contact />
      </main>

      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
