import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header onOpen={() => setOpenModal(true)} />
      <Hero onOpen={() => setOpenModal(true)} />
      <About />
      <Services />
      <Contact />
      <Footer />

      <BookingModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default App;