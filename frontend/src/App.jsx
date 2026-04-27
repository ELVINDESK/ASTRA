import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatIA from "./pages/ChatIA";


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

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astra" element={<ChatIA />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;