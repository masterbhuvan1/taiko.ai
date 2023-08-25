import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import { Home } from "./pages/home/Home.js";
import { Contact } from "./pages/contact/Contact.js";
import ChartsAndMap from "./pages/chartsandmap/ChartsAndMap.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chartsandmap" element={<ChartsAndMap />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
